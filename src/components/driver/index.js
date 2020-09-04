import React, { Component, Fragment } from 'react';
import './topDriver.css';
import { Link } from "react-router-dom";


export default class TopDriver extends Component {
    render() {
        return (
            <Fragment>
                <span className="topdriver">
                    <span>
                    {/* <Link
                            to={`/drivers/${this.props.ride.driverId}`}
                        >
                            {`Driver Name: ${this.state.driverName}`}
                        </Link> */}

                        <Link
                            to={`/drivers/${this.props.driver.driverId}`}
                        >
                            <b> {this.props.driver.name}</b>
                        </Link>
                    </span>
                    <span>
                        {this.props.driver.journeys}
                    </span>
                    <span>
                        {this.props.driver.rating}
                    </span>
                    <p></p>
                </span>
            </Fragment>
        );
    }
} 