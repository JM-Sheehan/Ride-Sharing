import _ from "lodash";

class StubAPI {
    constructor() {
        this.locations = ['Default', 'Waterford', 'Dungarvan', 'Cork', 'Limerick', 'Dublin', 'Galway', 'Kilkenny', 'Tramore']
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
                name: 'Joe Blogdsfasgs',
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
                password: 'password',
                start_time: 9.20
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
                password: 'password',
                start_time: 15.50
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
                password: 'password',
                start_time: 2.15
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
                password: 'password',
                start_time: 20.00
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
                password: 'password',
                start_time: 24.00
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
                password: 'password',
                start_time: 13.34
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
                password: 'password',
                start_time: 18.49
            },
            {
                ride_id: 8,
                driverId: 5,
                start: 'Waterford',
                end: 'Cork',
                cost: 6,
                day: 24,
                month: 9,
                year: 2020,
                password: 'password',
                start_time: 8.20
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
                password: 'password',
                start_time: 10.00
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
                password: 'password', 
                start_time: 13.30
            },
            {
                ride_id: 11,
                driverId: 5,
                start: 'Waterford',
                end: 'Cork',
                cost: 10,
                day: 24,
                month: 9,
                year: 2020,
                password: 'password',
                start_time: 18.49
            }
        ];
    }

    getDriversRides(driver_id){
        let search_id = parseInt(driver_id);
        let result = []
        // rides.forEach(element => {
        //     if(element.driverId === search_id){
        //         rides.push(element);
        //     }
        // });
        for(let i = 0; i< this.rides.length; i++){
            if(this.rides[i].driverId === search_id){
                result.push(this.rides[i]);
            }
        }
        return result;
    }
    
    getRide(ride_id) {
        let index = _.findIndex(
            this.rides,
            ride => ride.ride_id === ride_id
        );
        let result = index !== -1 ? this.rides[index] : null;
        return result;
    }

    getDriver(driver_id) {
        let search_id = parseInt(driver_id);
        let index = _.findIndex(
            this.drivers,
            driver => driver.driverId === search_id
        );
        let result = index !== -1 ? this.drivers[index] : null;
        return result;
    }r

    bookRide(id) {
        this.rides = _.reject(this.rides, ride => ride.ride_id === id);
        console.log(this.rides);

        // return elements;
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
        let maxId = 1;
        this.rides.forEach(element => {
            if(element.ride_id > maxId){
                maxId = element.ride_id;
            }
        });
    
        id = maxId +1;
        console.log(id.toString());
        this.rides.push({
            ride_id: id,
            driverId: driverId,
            start: start,
            end: end,
            cost: cost,
            day: day,
            month: month,
            year: year,
            password: 'password', 
            start_time: start_time
        });
        console.log(this.rides);
        if(!this.locations.includes(start)){
            this.locations.push(start);
        }

        if(!this.locations.includes(end)){
            this.locations.push(end);
        }

        console.log(this.locations);
        
    }

}

export default new StubAPI();