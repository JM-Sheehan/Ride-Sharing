import _ from "lodash";

class StubAPI {
    constructor() {
        this.locations = ['Waterford', 'Dungarvan', 'Cork', 'Limerick', 'Dublin', 'Galway', 'Kilkenny', 'Tramore']
        this.drivers = [
            {
                driverId: 1,
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
            },
            {
                driverId: 2,
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
            },
            {
                driverId: 3,
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
            },
            {
                driverId: 4,
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
            },
            {
                driverId: 5,
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
            },
            {
                driverId: 6,
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


        ]
        this.rides = [
            {
                ride_id: 1,
                driverId: 1,
                start: 'Waterford',
                end: 'Tramore',
                cost: 10,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 2,
                driverId: 1,
                start: 'Waterford',
                end: 'Cork',
                cost: 16,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 3,
                driverId: 2,
                start: 'Cork',
                end: 'Limerick',
                cost: 8,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 4,
                driverId: 3,
                start: 'Galway',
                end: 'Kilkenny',
                cost: 29,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 5,
                driverId: 4,
                start: 'Waterford',
                end: 'Dublin',
                cost: 7,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 6,
                driverId: 4,
                start: 'Waterford',
                end: 'Dublin',
                cost: 4,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 7,
                driverId: 5,
                start: 'Dublin',
                end: 'Kilkenny',
                cost: 10,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 8,
                driverId: 5,
                start: 'Waterford',
                end: 'Cork',
                cost: 4,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 9,
                driverId: 5,
                start: 'Waterford',
                end: 'Kilkenny',
                cost: 13,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            },
            {
                ride_id: 10,
                driverId: 6,
                start: 'Dungarvan',
                end: 'Tramore',
                cost: 6,
                day: 24,
                month: 9,
                year: 2020,
                start_time: '15:30'
            }
        ];
    }

    getRide(id) {
        let index = _.findIndex(
            this.rides,
            ride => ride.ride_id === id
        );
        let result = index !== -1 ? this.rides[index] : null;
        return result;
    }

    getDriver(id) {
        let index = _.findIndex(
            this.drivers,
            driver => driver.driverId === id
        );
        let result = index !== -1 ? this.drivers[index] : null;
        return result;
    }

    bookRide(k) {
        let elements = _.remove(this.rides, ride => ride.ride_id === k);
        return elements;
    }

    getAllRides() {
        return this.rides;
    }

    getAllDrivers() {
        return this.drivers;
    }

    getAllLocations() {
        return this.locations
    }

    addRide(driverId, start, end, cost, day, month, year, start_time){
        let id = 1;
        let last = _.last(this.rides);
        if(last){
            id = last.id + 1;
        }
        let len = this.rides.length;
        let newLen = this.rides.push({
            id, driverId, start, end, cost, day, month, year, start_time
        });
        if(!this.locations.includes(start)){
            this.locations.push(start);
        }
        if(!this.locations.includes(end)){
            this.locations.push(end);
        }
        return newLen > len;
    }

}

export default new StubAPI();