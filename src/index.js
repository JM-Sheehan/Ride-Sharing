import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import DriverPage from "./components/driverPage";

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="jumbotron">
                    <div className="container-fluid ">
                        <Switch>
                            {/* <Route path="/contacts/:id" component={ContactPage} /> */}
                            <Route exact path="/" component={App} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


