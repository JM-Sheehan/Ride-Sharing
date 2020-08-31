import DriverList from "./components/driverList/";
import SearchBar from "./components/searchBar/";
import RideList from "./components/rideList";
import FilterControls from "./components/filterControls";
import api from "./dataStore/stubAPI"; // NEW
import _ from "lodash";
import React, { Component, Fragment } from "react";


class App extends Component {
  state = { driver_name: "", cost: null, time: null};

  bookRide = (key) => {
      api.bookRide(key);
      this.setState({});
  };

  handleChange = (type, value) => {
      if(type === "name"){
          this.setState({driver_name:value});
      }
      else if(type === "cost"){
          this.setState({cost:value});
      }
      else{
          this.setState({time:value});
      }
  };

  render() {
      let defaultLocations = api.getAllLocations();
      let rides = api.getAllRides();
      let drivers = api.getAllDrivers();
    //   let filteredContacts = rides.filter(c => {
    //       const name = `${c.name.first} ${c.name.last}`;
    //       return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    //   });
    //   filteredContacts =
    //       this.state.gender === "all"
    //           ? filteredContacts
    //           : filteredContacts.filter(c => c.gender === this.state.gender);
    //   let sortedContacts = _.sortBy(filteredContacts, c => c.name.last);

      return (
          <Fragment>
              <SearchBar locations={defaultLocations} />
              {/* <Header noContacts={sortedContacts.length} />
              <FilterControls onUserInput={this.handleChange} />
              <ContactList
                  contacts={sortedContacts}
                  deleteHandler={this.deleteContact} */}
              {/* /> */}
              <DriverList drivers={drivers} />
          </Fragment>
      );
  }
}

export default App;