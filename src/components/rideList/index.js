import React, { Component } from "react";
import Ride from "../ride/";
import './rideList.css';

export default class RideList extends Component {


  render() {
    var rideCards = this.props.rides.map(c => (
    <Ride
        key = {c.ride_id}
        ride={c}
    />
    ));
    return (
      <div className="container-fluid contacts bg-info">
        <div className="row">{rideCards}</div>
      </div>
    );
  }
}