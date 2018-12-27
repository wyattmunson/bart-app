import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="pageHeader contentDiv">About</h1>
        <p>About us? Who's askin.</p>

        {/* WHAT IS THIS */}
        <h2 className="contentDiv">What is this?</h2>
        <p>
          This is chance to build a functional website and play with the BART
          API in a fun way. It was inspited by{" "}
          <a href="http://howfuckedismetro.com">howfuckedismetro.com</a>
        </p>

        {/* HOW'S IT BUILT */}
        <h2 className="contentDiv">How's it built?</h2>
        <p>
          This site is built in React and uses Redux to make API calls and
          maintain global state. It interfaces with the BART API, found{" "}
          <a href="http://api.bart.gov">here</a>.
        </p>

        {/* CONTRIBUTIONS */}
        <h2 className="contentDiv">Contributions</h2>
        <p>
          This site was created by Wyatt Munson. View the source code on GitHub{" "}
          <a href="http://github.com/munsonwf">here</a>. Pull requests are
          warmly welcomed.
        </p>
      </div>
    );
  }
}
