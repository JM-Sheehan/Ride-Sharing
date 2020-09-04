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
    };



    handleChange = (e, type, value) => {
        // e.preventDefault();
        this.props.onUserInput(type, value);
    };

    convertMonthToInt(month) {
        const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec']
        let result;

        for(let i = 0; i<12; i++){
            if(month === months[i]){
                result = i+1;
                return result;
            }
        }
    }

    handleDateChange = date => {
        this.setState({ date });
        this.setState({ day: parseInt(date.toString().substring(8, 10)) });
        this.setState({ month: this.convertMonthToInt(date.toString().substring(4, 7)) });
        this.setState({ year: parseInt(date.toString().substring(11, 15)) });

        this.handleChange(date, "date", date);
    }

    handleStartChange = event => {
        this.setState({ start: event.target.value });
        this.handleChange(event, "start", event.target.value);
    }

    handleEndChange = event => {
        this.setState({ end: event.target.value });
        this.handleChange(event, "end", event.target.value);
    }

    handleCaseChange = event => {
        this.handleChange(event, "case", 2);
    }

    render() {
        let options = this.props.locations.map((location) =>
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
                        {this.state.start}

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
                        onChange={this.handleDateChange}
                        value={this.state.date}
                    />
                </div>
                <div className="search-button">
                    <button
                        type="button"
                        className={"btn w-100 "}
                        onClick={this.handleCaseChange}
                    >
                        Search
                    </button>
                </div>
                {this.state.day}
                {this.state.month}
                {this.state.year}

            </span>
        return <Fragment>{form}</Fragment>;
    }
}