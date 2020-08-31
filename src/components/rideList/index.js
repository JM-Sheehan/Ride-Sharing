import React, { Component } from "react";
import Ride from "../ride/";
import './rideList.css';

export default class ContactList extends Component {
  render() {
    const rideCards = this.props.contacts.map(c => (
    <Ride
        key={c.ride_id}
        ride={c}
        deleteHandler={this.props.deleteHandler}
    />
    )); 
    return (
      <div className="container-fluid contacts bg-info">
        <div className="row">{rideCards}</div>
      </div>
    );
  }
}