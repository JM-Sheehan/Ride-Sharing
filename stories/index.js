import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TopDriver from '../src/components/topDrivers'

const driver = {
    id: 1,
    name: 'Joe Bloggs',
    journeys: 10,
    link : 'http://www.foo.bar',

    rating: 4.3,
    car : {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    },
    phone_number : '087-7293',
    email_address : 'Joe@blogmail.com'
}

storiesOf('Ride Sharing App/Top Drivers', module)
    .add('default', () => <TopDriver driver = {driver} />
    )
    .add('No hyperlink', () => <TopDriver driver= { { ...driver, link: ''} }  />
    )