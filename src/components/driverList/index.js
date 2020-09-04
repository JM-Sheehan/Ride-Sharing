import React, { Component, Fragment } from 'react';
import Driver from '../driver';
import { Link } from "react-router-dom";


export default class TopDriverList extends Component {
render() {
    let items = this.props.drivers.map((driver) => (
        <tr key={driver}>
            <td>
                <Link to={`/drivers/${driver.driverId}`}>
                    {driver.name}

                </Link>
            </td>
            <td>{driver.journeys}</td>
            <td>{driver.rating}</td>
        </tr>
    ));
    let table =
        (
            <table className="Table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>journeys</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )
    return <Fragment>{table}</Fragment>;
}
}