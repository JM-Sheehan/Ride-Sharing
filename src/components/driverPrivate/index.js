import React, { Component } from 'react';
import './ridePrivate.css';
import Calendar from 'react-calendar';
import api from "../../dataStore/stubAPI"; // NEW
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Link } from "react-router-dom";



class DriverPrivate extends Component {
    state = {
        date: new Date(),
        start: null,
        end: null,
        cost: null,
        day: null,
        month: null,
        year: null,
        time: null

    };

    convertMonthToInt(month) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec']
        let result;

        for (let i = 0; i < 12; i++) {
            if (month === months[i]) {
                result = i + 1;
                return result;
            }
        }
    }

    handleSubmit = () => {
        console.log("Submitted");
        let id = this.props.driver.driverId;
        if (
            this.state.start !== null && this.state.start !== "" &&
            this.state.end !== null && this.state.end !== "" && this.state.cost !== null
            && this.state.day !== null && this.state.month !== null && 
            this.state.year !== null && this.state.time !== null
        ) 
        {
            api.addRide(id, this.state.start, this.state.end, this.state.cost, this.state.day,
                this.state.month, this.state.year, this.state.time);
        }

        this.setState({});

    }

    handleDateChange = date => {
        this.setState({ date });
        this.setState({ day: parseInt(date.toString().substring(8, 10)) });
        this.setState({ month: this.convertMonthToInt(date.toString().substring(4, 7)) });
        this.setState({ year: parseInt(date.toString().substring(11, 15)) });

        // this.handleChange(date, "date", date);
    }

    handleStartChange = (e) => this.setState({ start: e.target.value });
    handleEndChange = (e) => this.setState({ end: e.target.value });
    handleCostChange = (e) => {
        if (!isNaN(parseInt(e.target.value))) {
            this.setState({ cost: e.target.value });
        }
    }
    handleTimeChange = (e) => {
        if (!isNaN(parseFloat(e.target.value))) {
            this.setState({ time: e.target.value });
        }

    }

    render() {
        let link = `/drivers/${this.props.driver.driverId}`
        return (
            <form className="form bg-dark text-light">
                <h3>Route Details</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Starting Point"
                        value={this.state.start}
                        onChange={this.handleStartChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="End Point"
                        value={this.state.end}
                        onChange={this.handleEndChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Cost"
                        value={this.state.cost}
                        onChange={this.handleCostChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Time"
                        value={this.state.time}
                        onChange={this.handleTimeChange} />
                </div>
                <div>
                    <Calendar
                        onChange={this.handleDateChange}
                        value={this.state.date}
                    />
                </div>
                <Link to={link}>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick=
                    {this.handleSubmit}
                >
                    Add
                </button>
                </Link>
                

            </form>
        );
    }
}
export default withRouter(DriverPrivate);