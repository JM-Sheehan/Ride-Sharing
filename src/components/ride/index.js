import React, { Component, Fragment } from "react";
import buttons from "../../config/buttonsConfig";
import api from '../../dataStore/stubAPI';
import { Link } from "react-router-dom";


class Ride extends Component {
    state = {
        id: this.props.driverId,
        driverName: this.props.driverName,
        start: this.props.ride.start,
        end: this.props.ride.end,
        cost: this.props.ride.cost,
        status: ""
    };

    handleBooking = event => {
        this.setState({
            status: 'book'
        })
    };

    handleConfirmBooking = event => {
        event.preventDefault();
        this.props.bookingHandler(this.state.driverId);
    };

    render() {
        let activeButtons = buttons.normal;
        let buttonHandler = this.handleBooking;
        let cardColor = "bg-white";
        if (this.state.status === "book") {
            cardColor = "bg-primary";
            buttonHandler = this.handleConfirmBooking;
        }
        return (
            <div className={`card  ${cardColor}`}>
                <div className="card-body">
                    <h5 className="card-title ">
                        <Link
                            to={`/contacts/${this.props.ride.driverId}`}
                        >
                            {`${this.props.ride.driverName}`}
                        </Link>
                    </h5>
                    <Fragment>
                        <p>
                            {/* <FontAwesomeIcon icon={["fas", "envelope"]} /> */}
                            <span> {this.props.ride.start}</span>
                        </p>
                        <p>
                            {/* <FontAwesomeIcon icon={["fas", "phone"]} /> */}
                            <span> {this.props.ride.end} </span>
                        </p>
                        <p>
                            {/* <FontAwesomeIcon icon={["fas", "phone"]} /> */}
                            <span> {this.props.ride.cost} </span>
                        </p>
                    </Fragment>
                </div>
                <div className="card-footer">
                    <div
                        className="btn-group d-flex btn-group-justified"
                        role="group"
                        aria-label="..."
                    >
                        <button
                            type="button"
                            className={"btn w-100 " + activeButtons.buttonColour}
                            onClick={buttonHandler}
                        >
                            {activeButtons.buttonVal}
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ride;