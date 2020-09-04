import React, { Component, Fragment } from "react";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI';
import { Link } from "react-router-dom";


class Ride extends Component {
    state = {
        id: this.props.ride.ride_id,
        driverName: api.getDriver(this.props.ride.driverId).name,
        start: this.props.ride.start,
        end: this.props.ride.end,
        cost: this.props.ride.cost,
        day: this.props.ride.day,
        month: this.props.ride.month,
        year: this.props.ride.year,
        time: this.props.ride.start_time,
        status: ""
    };



    handleConfirmBooking = event => {
        api.bookRide(this.state.id);
    };

    render() {
        let cardColor = "bg-white";

        return (
            <div className={`card  ${cardColor}`}>
                <div className="card-body">
                    <h5 className="card-title ">
                        <Link
                            to={`/drivers/${this.props.ride.driverId}`}
                        >
                            {`Driver Name: ${this.state.driverName}`}
                        </Link>
                    </h5>
                    <Fragment>
                        <p>
                            <span> {`Ride id: ${this.state.id}`}</span>
                        </p>
                        <p>
                            <span> {`Start Point: ${this.state.start}`}</span>
                        </p>
                        <p>
                            <span> {`Destination: ${this.state.end}`}</span>
                        </p>
                        <p>
                            <span> {`Start Date: ${this.state.day}/ ${this.state.month}/ ${this.state.year}`}</span>
                        </p>
                        <p>
                            <span> {`Start Time: ${this.state.time}`}</span>
                        </p>
                        <p>
                            <span> {`Cost: ${this.state.cost}`}</span>
                        </p>

                    </Fragment>
                </div>
                <div className="card-footer">
                    <div
                        className="btn-group d-flex btn-group-justified"
                        role="group"
                        aria-label="..."
                    >
                        <Link to="/">
                            <button
                                type="button"
                                className={"btn w-100 "}
                                onClick={this.handleConfirmBooking}
                            >
                                Book
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            // <div>
            // <div>
            //      {this.state.id}
            //      <p>

            //      </p>
            //     {this.state.driverName}
            //     <p>
            //     </p>
            //     {this.state.start}
            //     <p>
            //     </p>
            //     {this.state.end}
            //     <p>
            //     </p>
            //     {this.state.cost}
            //    <p>
            //        {this.state.driverPhone}
            //    </p>
            // </div>
        );
    }
}

export default Ride;