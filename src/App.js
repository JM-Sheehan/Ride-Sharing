import DriverList from "./components/driverList/";
import SearchBar from "./components/searchBar/";
import RideList from "./components/rideList";
import FilterControls from "./components/filterControls";
import api from "./dataStore/stubAPI"; // NEW
import _ from "lodash";
import React, { Component, Fragment } from "react";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends Component {
    state = {
        start: "",
        end: "",
        day: null,
        month: null,
        year: null,

        driver_name: "", cost: null, time: null,

        case: 1
    };

    bookRide = (key) => {
        api.bookRide(key);
        this.setState({});
    };

    handleChange = (type, value) => {
        if (type === "name") {
            this.setState({ driver_name: value });
        }
        else if (type === "cost") {
            if(value === "all"){
                this.setState({cost: 0});
            }
            else{
                this.setState({ cost: parseInt(value) });
            }
        }
        else if (type === "time") {
            this.setState({ time: value });
        }
        else if (type === "start") {
            this.setState({ start: value });
        }
        else if (type === "end") {
            this.setState({ end: value });
        }
        else if (type === "date") {
            this.setState({ day: parseInt(value.toString().substring(8, 10)) });
            this.setState({ month: this.convertMonthToInt(value.toString().substring(4, 7)) });
            this.setState({ year: parseInt(value.toString().substring(11, 15)) });
        }
        else if (type === "case") {
            this.setState({ case: value });
        }
    };


    convertMonthToInt(month) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec']
        let result;

        for (let i = 0; i < 12; i++) {
            if (month === months[i]) {
                result = i + 1;
                return result;
            }
        }
    }

    searchRides = function () {
        let rides = api.getAllRides();
        var searchRides = [];
        let testStart = this.state.start.toLowerCase();
        let testEnd = this.state.end.toLowerCase();
        let testDay = this.state.day;
        let testMonth = this.state.month;
        let testYear = this.state.year;

        rides.forEach(function (ride) {
            if (ride.start.toLowerCase() === testStart &&
                ride.end.toLowerCase() === testEnd &&
                ride.day === testDay &&
                ride.month === testMonth &&
                ride.year === testYear
            ) {
                searchRides.push(ride);
            }  
        });
        return searchRides;
    }

    filterRides = function (searchRides) {
        let temp = searchRides;
        var filteredRides = [];
        let testCost = this.state.cost;
        let testTime = this.state.time;
        if ((this.state.cost === 0 || this.state.cost === null)
         && (this.state.time === null || this.state.time === 0)) {
            return searchRides;
        }
        temp.forEach(function(ride){
            if(ride.cost < testCost){
                filteredRides.push(ride);
            }
        });
            return filteredRides;
    }

    // filterRides = function (searchRides) {
    //     let filteredRides = [];
    //     let testCost = this.state.cost;
    //     let testTime = this.state.time;
    //     if ((this.state.cost === 0 || this.state.cost === null)
    //      && (this.state.time === null|| this.state.time === null)) {
    //         return searchRides;
    //     }
    //     else {
    //         // searchRides.forEach(function(ride){
    //         //     if(ride.cost < testCost){
    //         //         filteredRides.push(ride);
    //         //     }
    //         // })
           
    //         let tempFilteredRides = [];
    //         if (this.state.cost !== null) {
    //             searchRides.forEach(function (ride) {
    //                 if (ride.cost <= testCost) {
    //                     tempFilteredRides.push(ride);
    //                 }
    //             });
    //         }
    //         else {
    //             tempFilteredRides.push(...searchRides);
    //         }
    //         if (this.state.time !== null) {
    //             tempFilteredRides.forEach(function (ride) {
    //                 if (ride.time <= testTime) {
    //                     filteredRides.push(ride);
    //                 }
    //             });
    //         }
    //         else {
    //             filteredRides.push(...tempFilteredRides);
    //         }
    //         return filteredRides;
    //     }
    // }
    render(){
        let sortedRides;
        let defaultLocations = api.getAllLocations();
        let drivers = api.getAllDrivers();

        if (this.state.case !== 1) {
            let searchedRides = this.searchRides();
            let filteredRides = this.filterRides(searchedRides);
            sortedRides = _.sortBy(filteredRides, c => c.time);
            sortedRides = searchedRides;
        }

        let main_panel = null;
        switch (this.state.case) {
            case 1:
                main_panel =
                    <DriverList drivers={drivers} />;
                break;

            case 2:
                main_panel =
                    <span>
                        {/* <FilterControls onUserInput=
                            {this.handleChange} locations={defaultLocations} /> */}
                        <RideList rides={sortedRides} update ={this.searchRides} />
                    </span>;
                break;
            default:
                break;
        }
        return (
            <Fragment>
                <SearchBar
                    locations={defaultLocations}
                    onUserInput=
                    {this.handleChange}
                />
                <FontAwesomeIcon icon={["fas", "phone"]} />
                {this.state.start}
                {this.state.end}
                <p></p>
                {main_panel};

            </Fragment>
        );
    }
}

export default App;