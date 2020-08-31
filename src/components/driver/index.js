import React, { Component, Fragment } from 'react';
import './topDriver.css';

export default class TopDriver extends Component {
  render() {
        // let line = this.props.post.link ? (
        //     <a href={this.props.post.link}>{this.props.driver.id}</a>
        // ) : (
        //     <span>{this.props.driver.name}</span>
        // );
        return (
            <Fragment>
                <span className="topdriver">
                    {/* {line} */}
                    <span>
                       <b> {this.props.driver.name}</b>
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