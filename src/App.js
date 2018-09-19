import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Contacts from "./components/Contact/Contacts";
import AddContact from "./components/Contact/AddContact";
import "./App.css";
import { Provider } from "./context";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header brand="c-m" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
