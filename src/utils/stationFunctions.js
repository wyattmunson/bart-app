import React from "react";

export const getBackgroundColor = color => {
  if (color === "#ff0000") {
    return "redLine";
  } else if (color === "#ff9933") {
    return "orangeLine";
  } else if (color === "#ffff33") {
    return "yellowLine";
  } else if (color === "#0099cc") {
    return "blueLine";
  } else if (color === "#339933") {
    return "greenLine";
  }
};

export const getFgColor = color => {
  if (color === "#ff0000") {
    return "redLineFg";
  } else if (color === "#ff9933") {
    return "orangeLineFg";
  } else if (color === "#ffff33") {
    return "yellowLineFg";
  } else if (color === "#0099cc") {
    return "blueLineFg";
  } else if (color === "#339933") {
    return "greenLineFg";
  }
};

export const calculateTime = input => {
  if (input.minutes < 5) {
    return (
      <span className="shortTime">
        <i class="far fa-clock" /> Short freaking wait
      </span>
    );
  } else if (input.minutes < 15) {
    return (
      <span className="mediumTime">
        <i class="far fa-clock " /> Normal freaking wait
      </span>
    );
  } else if (input.minutes < 30) {
    return (
      <span className="longTime">
        <i class="far fa-clock " /> Intolerable freaking wait
      </span>
    );
  } else if (input.minutes === "Leaving") {
    return (
      <span className="shortTime">
        <i class="fas fa-exclamation-triangle" /> At the freaking station!
      </span>
    );
  } else {
    return (
      <span className="longTime">
        <i class="far fa-clock" /> Intolerable freaking wait
      </span>
    );
  }
};

export const directionDescription = destination => {
  if (destination === "Antioch") {
    return "To East Bay, going north and east";
  } else if (destination === "Millbrae") {
    return "To SF and destinations south of the city, but not the airport";
  } else if (destination === "Richmond") {
    return "To East Bay, going north";
  } else if (destination === "SF Airport") {
    return "To downtown SF, ending at SFO Airport";
  } else if (destination === "Dublin/Pleasanton") {
    return "To East Bay, going south and east";
  } else if (destination === "Warm Springs") {
    return "To East Bay, south down the coast";
  } else if (destination === "Daly City") {
    return "To downtown SF";
  } else if (destination === "SFO/Millbrae") {
    return "To downtown SF, SFO airport, and destinations south of the city";
  } else if (destination === "Bay Fair") {
    return "White line refers to trains added to the system but not given a specific line yet";
  }
};

export const routeColorIcons = destination => {
  if (destination === "Antioch") {
    return <i class="fas fa-circle yellowLineFg" />;
  } else if (destination === "Daly City") {
    return (
      <div>
        <i class="fas fa-circle redLineFg" />
        <i class="fas fa-circle yellowLineFg" />
        <i class="fas fa-circle blueLineFg" />
        <i class="fas fa-circle greenLineFg" />
      </div>
    );
  } else if (destination === "Dublin/Pleasanton") {
    return <i class="fas fa-circle blueLineFg" />;
  } else if (destination === "SFO/Millbrae") {
    return <i class="fas fa-circle yellowLineFg" />;
  } else if (destination === "Richmond") {
    return (
      <div>
        <i class="fas fa-circle redLineFg" />
        <i class="fas fa-circle orangeLineFg" />
      </div>
    );
  } else if (destination === "Warm Springs") {
    return (
      <div>
        <i class="fas fa-circle greenLineFg" />
        <i class="fas fa-circle orangeLineFg" />
      </div>
    );
  } else if (destination === "SF Airport") {
    return <i class="fas fa-circle yellowLineFg" />;
  } else if (destination === "Millbrae") {
    return (
      <div>
        <i class="fas fa-circle redLineFg" />
        <i class="fas fa-circle yellowLineFg" />
      </div>
    );
  } else {
    return <i class="fas fa-circle" />;
  }
};
