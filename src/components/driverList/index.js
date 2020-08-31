import React, { Component, Fragment } from 'react';
import TopDriver from '../driver';  

export default class TopDriverList extends Component {

    render() {
        let items = this.props.drivers.map((driver) => (
            <tr key={driver}>
                <td>{driver.name}</td>
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