import React, { Component, Fragment } from 'react';
import "./filterControls.css"

export default class FilterControls extends Component {

    state= {
        name:null,
        cost:null,
        time:null
    }
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };

    handleDriverChange = e => {
        // this.setState({ name: e.target.value });
        this.handleChange(e, "name", e.target.value);
    };
    handleCostChange = e => {
        this.setState({ cost: e.target.value });
        this.handleChange(e, "cost", e.target.value);
    };
    handleTimeChange = e => {
        this.setState({ time: e.target.value });
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
                                type = "cost"
                                onChange={this.handleCostChange}
                            >
                                <option value="all">Any</option>
                                <option value="5">{`< 5`}</option>
                                <option value="10">{`< 10`}</option>
                                <option value="15">{`< 15`}</option>
                                <option value="20">{`< 20`}</option>
                            </select>
                            <select
                                type = "time"
                                onChange={this.handleTimeChange}
                            >
                                <option value="0">{`00:00`}</option>
                                <option value="1">{`01:00`}</option>
                                <option value="2">{`02:00`}</option>
                                <option value="3">{`03:00`}</option>
                                <option value="4">{`04:00`}</option>
                                <option value="5">{`05:00`}</option>
                                <option value="6">{`06:00`}</option>
                                <option value="7">{`07:00`}</option>
                                <option value="8">{`08:00`}</option>
                                <option value="9">{`09:00`}</option>
                                <option value="10">{`10:00`}</option>
                                <option value="11">{`11:00`}</option>
                                <option value="12">{`12:00`}</option>
                                <option value="13">{`13:00`}</option>
                                <option value="14">{`14:00`}</option>
                                <option value="15">{`15:00`}</option>
                                <option value="16">{`16:00`}</option>
                                <option value="17">{`17:00`}</option>
                                <option value="18">{`18:00`}</option>
                                <option value="19">{`19:00`}</option>
                                <option value="20">{`20:00`}</option>
                                <option value="21">{`21:00`}</option>
                                <option value="22">{`22:00`}</option>
                                <option value="23">{`23:00`}</option>
                            </select>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }

}