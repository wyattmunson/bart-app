import React from "react";

const BartInfo = () => {
  return (
    <div className="container contentDiv">
      <h1>BART Info</h1>
      <p>Interested in more information?</p>

      {/* ABOUT THE API */}
      <h2>About the API</h2>
      <p>
        BART generously offers a publically available API. You can see the
        official site <a href="hhtp://api.bar.gov">here</a>.
      </p>
      <p>
        This site is copmpletely dirven by the BART API. All station
        information, departure estimates, and station lists are dynmailcally
        generated from BARTZ.
      </p>
      <h3>Adivosries</h3>
      <p>
        The BART API only displays system-wide advisories. In other words, if
        there was a 15 minute delay at, say Lake Merritt, it would display at 15
        minute deplay across the entire system.
      </p>
      <h3>System reset</h3>
      <p>
        The BART API seems to reset about an hour before the first trains run in
        the morning. All API information is unavailable at that time, including
        departure estimates, advisories, and station information.
      </p>
    </div>
  );
};

export default BartInfo;
