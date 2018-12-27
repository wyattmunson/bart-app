import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron pageHeader">
          <h1 class="display-4">Hello, localhost!</h1>
          <p class="lead">Welcome to the quick-react starter page.</p>
          <p>
            Start adding components to the <code>src/components</code> class and
            add routes in <code>App.js</code>.
          </p>
        </div>
      </div>
    );
  }
}
