import React, { Component, Fragment } from 'react';
import './searchBar.css';
import Calendar from 'react-calendar';

export default class SearchBar extends Component {
    state = {
        date: new Date(),
        day: null,
        month: null,
        year: null,
        start: null,
        end: null,
        month: null,
        day: null,
        days_array: null,
        DAYS: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 3]
    };


    onChange = date => {
        this.setState({ date });
        this.setState({ day: this.state.date.toString().substring(8, 10) });
        this.setState({ month: this.state.date.toString().substring(4, 7) });
        this.setState({ year: this.state.date.toString().substring(11, 15) });
        console.log(this.state.date);
    }

    handleStartChange = event => {
        this.setState({ start: event.target.value });
    }

    handleEndChange = event => {
        this.setState({ end: event.target.value });
    }

    render() {
        const options = this.props.locations.map((location) =>
            <option value={`${location}`}>{location}</option>
        );

        let form =
            <span>
                <form>
                    <label for="starts">
                        Start Point
                        <select value={this.state.start} onChange={this.handleStartChange}>
                            {options}
                        </select>
                    </label>
                </form>
                <form>
                    <label for="ends">
                        End Point
                        <select value={this.state.end} onChange={this.handleEndChange}>
                            {options}
                        </select>
                    </label>
                </form>
                <div>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    {`${this.state.month} ${this.state.day} ${this.state.year}`}

                </div>
            </span>
        return <Fragment>{form}</Fragment>;
    }
}