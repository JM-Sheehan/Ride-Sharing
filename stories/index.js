import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TopDriver from '../src/components/topDriver';
import TopDriverList from '../src/components/topDriverList';
import SearchBar from '../src/components/searchBar';

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
}

const sample_locations = 

storiesOf('Ride Sharing App/Top Driver', module)
    .add('default', () => <TopDriver driver={driver} />
    )
    .add('No hyperlink', () => <TopDriver driver={{ ...driver, link: '' }} />
    )

storiesOf('Ride Sharing App/Search Bar', module)
    .add('default', () => 
    {
        const defaultLocations = 
        [
            'Waterford',
            'Dungarvan',
            'Tramore',
            'Cork',
            'Dublin'
        ];
        return <SearchBar locations = {defaultLocations}/>
    });

storiesOf('Ride Sharing App/Top Drivers List', module)
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