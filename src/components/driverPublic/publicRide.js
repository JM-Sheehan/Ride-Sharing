import React, { Component, Fragment } from 'react';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';
import api from "../../dataStore/stubAPI"; // NEW

class DriverPublic extends Component {
    render() {
        const car =
            `...........${this.props.driver.car.make} ${this.props.driver.car.model} ${this.props.driver.car.cc}`
            ;


        let id = this.props.driver.driverId;
        console.log(`ID IS ${id}`);
        let rides = api.getDriversRides(id);

        console.log(rides);

        let items = rides.map((ride) => (
            <tr key={ride}>
                <td>{ride.ride_id}</td>
                <td>{ride.start}</td>
                <td>{ride.end}</td>
                <td>{ride.cost}</td>
                <td>{`${ride.day}/ ${ride.month}/ ${ride.year}`}</td>
                <td>{ride.time}</td>
            </tr>
        ));
        let tempTable =
            (
                <table className="Table">
                    <thead>
                        <tr>
                            <th>Ride Id</th>
                            <th>Starting Point</th>
                            <th>Destination</th>
                            <th>Cost</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                </table>
                
            )

        return (
            <Fragment>
                <h4>
                    <FontAwesomeIcon icon={["fas", "car"]} />
                    <span> {car}</span>
                </h4>
                <h4>
                    <FontAwesomeIcon icon={["fas", "phone"]} />
                    <span> {this.props.driver.phone_number}</span>
                </h4>
                <h4>
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                    <span> {this.props.driver.email_address}</span>
                </h4>
                <h4><b>Rides:</b></h4>
                <FontAwesomeIcon icon={["fas", "road"]} />
                <span>{tempTable}</span>

            </Fragment>
        );
    }

}
export default withRouter(DriverPublic);