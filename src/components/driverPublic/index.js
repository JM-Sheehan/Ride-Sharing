import React, { Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./driverPublic.css";
import { Link } from "react-router-dom";
import PublicDriver from "../driverPublic/publicRide"

export default ({ driver }) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-2">
                    <Link to="/">
                        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="3x" />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="col-3">
                    <h2>{`${driver.name} (id = ${driver.driverId})`}</h2>
                </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <PublicDriver driver={driver} />
                    </div>
                </div>
        </Fragment>
    );
};