import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
// import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import DriverPage from "./components/driverPage";

// class Router extends Component {
//     componentDidMount() {
//         request.get("https://randomuser.me/api/?results=50").end((error, res) => {
//             if (res) {
//                 let { results: contacts } = JSON.parse(res.text);
//                 api.initialize(contacts);
//                 this.setState({});
//             } else {
//                 console.log(error);
//             }
//         });
//     }

//     render() {
//         return (
//             <BrowserRouter>
//                 <div className="jumbotron">
//                     <div className="container-fluid ">
//                         <Switch>
//                             {/* <Route path="/contacts/:id" component={ContactPage} /> */}
//                             <Route exact path="/" component={App} />
//                             <Redirect from="*" to="/" />
//                         </Switch>
//                     </div>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }

const Router = (props) => {
    return (
      <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-3">
                <h1>
                  <Link to="/">Ride Sharing</Link>
                </h1>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/drivers/:driverId" component={DriverPage} />
            <Route exact path="/" component={App} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
  
  ReactDOM.render(<Router />, document.getElementById("root"));

