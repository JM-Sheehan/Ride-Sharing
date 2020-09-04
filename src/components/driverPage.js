import React, { Fragment } from "react";
import { withRouter, Route, Link } from "react-router-dom";
import api from "../dataStore/stubAPI"; // NEW
import DriverPublic from "../components/driverPublic/";
import DriverPrivate from "../components/driverPrivate/";

const DriverPage = props => {
    let temp = api.getAllDrivers();
    let { driverId }  = props.match.params;
    let driver = api.getDriver(driverId );
    console.log(driver);
    console.log(driverId);

    return (
        <Fragment>
            {driver ? (
                <Fragment>
                    <DriverPublic driver={driver} />
                    {!props.history.location.pathname.endsWith("/private") && (
                        <Link class="btn btn-primary active" to={`/drivers/${driverId}/private`}>Add Lift</Link>
                    )}
                    <Route path={`/drivers/:driverId/private`}
                        render={(props) => <DriverPrivate {...props} driver={driver} />} />

                </Fragment>
            ) : (
                    <p>
                        {driver.name}
                    </p>
                )}
        </Fragment>
    );
};

export default withRouter(DriverPage);