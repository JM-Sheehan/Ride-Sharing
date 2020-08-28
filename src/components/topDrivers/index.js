import React, { Component, Fragment } from 'react';
import './topDrivers.css';

export default class NewsItem extends Component {
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
                </span>
            </Fragment>
        );
    }
} 