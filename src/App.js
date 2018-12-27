import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";
import Root from "./components/rootPage/Root";
import About from "./components/staticPages/About";
import Contact from "./components/staticPages/Contact";
import NotFound404 from "./components/staticPages/NotFound404";
import NavHeader from "./components/navigation/NavHeader";
import StationList from "./components/stationList/StationList";
import Stations from "./components/stations/Stations";
import BartInfo from "./components/staticPages/BartInfo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <NavHeader />
              <Switch>
                <Route exact path="/" component={Root} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/stationlist" component={StationList} />
                <Route path="/stations/:id" component={Stations} />
                <Route path="/bartinfo" component={BartInfo} />
                <Route path="*" component={NotFound404} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
