import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TopDriver from '../src/components/driver';
import TopDriverList from '../src/components/driverList';
import SearchBar from '../src/components/searchBar';
import Ride from '../src/components/ride';
import RideList from '../src/components/rideList';
import { MemoryRouter, Route } from "react-router";
import FilterControls from '../src/components/filterControls';
import api from "../src/dataStore/stubAPI"; // NEW

const driver = {
    driveId: 1,
    name: 'Joe Bloggs',
    journeys: 10,
    rating: 4.3,
    car: {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    },
    phone_number: '087-7293',
    email_address: 'Joe@blogmail.com'
};

const sampleRide = {

    ride_id: 10,
    driverId: 1,
    start: 'Dungarvan',
    end: 'Tramore',
    cost: 6,
    day: 24,
    month: 9,
    year: 2020,
    start_time: '15:30'

};

storiesOf('Ride Sharing App/Top Driver', module)
    .add('default', () => <TopDriver driver={driver} />
    )
    .add('No hyperlink', () => <TopDriver driver={{ ...driver, link: '' }} />
    )



storiesOf("Ride Sharing App/ Ride", module).addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
    .add("default", () => (
        <Ride ride={sampleRide} deleteHandler={action('Delete confirmed')} />
    ));

storiesOf("Ride Sharing App/ Ride List", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
        let sampleRides = api.getAllRides();
        return <RideList rides={sampleRides} />
    });

storiesOf('Ride Sharing App/ Drivers List', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add('default', () => {
        const defaultDrivers = [
            {
                ...driver,
                id: 1,
                name: 'Driver 1',
                journeys: 1,
                rating: 2,
                car: {
                    make: 'Toyota',
                    model: 'Corolla',
                    cc: 1.8
                },
                phone_number: '087-7293',
                email_address: 'Joe@blogmail.com'
            },
            {
                ...driver,
                id: 2,
                name: 'Driver 2',
                journeys: 1,
                rating: 2,
                car: {
                    make: 'Toyota',
                    model: 'Corolla',
                    cc: 1.8
                },
                phone_number: '087-7293',
                email_address: 'Joe@blogmail.com'
            },
            {
                ...driver,
                id: 3,
                name: 'Driver 3',
                journeys: 1,
                rating: 2,
                car: {
                    make: 'Toyota',
                    model: 'Corolla',
                    cc: 1.8
                },
                phone_number: '087-7293',
                email_address: 'Joe@blogmail.com'
            },
            {
                ...driver,
                id: 4,
                name: 'Driver 4',
                journeys: 1,
                rating: 2,
                car: {
                    make: 'Toyota',
                    model: 'Corolla',
                    cc: 1.8
                },
                phone_number: '087-7293',
                email_address: 'Joe@blogmail.com'
            }
        ];
        return <TopDriverList drivers={defaultDrivers} />
    });

// storiesOf('Ride Sharing App/Search Bar', module)
//     .add('default', () => {
//         const defaultLocations =
//             [
//                 'Waterford',
//                 'Dungarvan',
//                 'Tramore',
//                 'Cork',
//                 'Dublin'
//             ];
//         return <SearchBar locations={defaultLocations} />
//     });

storiesOf("Ride Sharing App/Search Bar", module)
    // .addDecorator(story => (
    //     <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    // ))
    .add("default", () => {
        const defaultLocations =
            [
                'Waterford',
                'Dungarvan',
                'Tramore',
                'Cork',
                'Dublin'
            ];
        return <SearchBar locations={defaultLocations}
            onUserInput={action('Search criteria changes')} />
    });

storiesOf("Ride Sharing App/Filter Controls", module)
    // .addDecorator(story => (
    //     <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    // ))
    .add("default", () => {
        const locations = [sampleRide, sampleRide, sampleRide, sampleRide, sampleRide]
        return <FilterControls locations={locations}
            onUserInput={action('Search criteria changes')} />
    });


