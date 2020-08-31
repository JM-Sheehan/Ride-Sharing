import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    
    handleDriverChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handlePriceChange = e => {
        this.handleChange(e, "cost", e.target.value);
    };
    handleTimeChange = e => {
        this.handleChange(e, "time", e.target.value);
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-warning">
                    <div className="col-md-12">
                        <h4>
                            <span>Driver Name </span>
                            <input
                                type="name"
                                placeholder="Name Search"
                                onChange={this.handleDriverChange}
                            />
                            <span> Ride Cost: </span>
                            <select
                                id="cost"
                                onChange={this.handlePriceChange}
                            >
                                <option value="one">{`< 8`}</option>
                                <option value="two">{`< 15`}</option>
                                <option value="three">{`< 20`}</option>
                                <option value="four">{`>= 20`}</option>
                            </select>
                            <select
                                id="time"
                                onChange={this.handleTimeChange}
                            >
                                <option value="one">{`01:00`}</option>
                                <option value="two">{`02:00`}</option>
                                <option value="three">{`03:00`}</option>
                                <option value="four">{`04:00`}</option>
                                <option value="five">{`05:00`}</option>
                                <option value="six">{`06:00`}</option>
                                <option value="seven">{`07:00`}</option>
                                <option value="eight">{`08:00`}</option>
                                <option value="nine">{`09:00`}</option>
                                <option value="ten">{`10:00`}</option>
                                <option value="eleven">{`11:00`}</option>
                                <option value="twelve">{`12:00`}</option>
                                <option value="thirteen">{`13:00`}</option>
                                <option value="fourteen">{`14:00`}</option>
                                <option value="fifteen">{`15:00`}</option>
                                <option value="sixteen">{`16:00`}</option>
                                <option value="seventeen">{`17:00`}</option>
                                <option value="eighteen">{`18:00`}</option>
                                <option value="nineteen">{`19:00`}</option>
                                <option value="twenty">{`20:00`}</option>
                                <option value="twenty_one">{`21:00`}</option>
                                <option value="twenty_two">{`22:00`}</option>
                                <option value="twenty_three">{`23:00`}</option>
                                <option value="twenty_four">{`24:00`}</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }

}