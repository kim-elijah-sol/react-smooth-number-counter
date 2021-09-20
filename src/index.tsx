import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import NumberCounter from "./lib/number-counter";

ReactDOM.render(
  <React.StrictMode>
    <div className="col col-1">
      <NumberCounter
        value={0.32}
        className="fs-16"
        transition={130}
        suffix="%"
      />
      <NumberCounter
        value={1923400}
        id="krw1"
        transition={130}
        suffix="₩/KRW"
      />
    </div>
    <div className="col col-2">
      <NumberCounter
        value={0.32}
        className="fs-16"
        transition={130}
        suffix="%"
      />
      <NumberCounter
        value={1923400}
        id="krw2"
        transition={130}
        suffix="₩/KRW"
      />
    </div>
    <div className="col col-3">
      <NumberCounter
        value={0.32}
        className="fs-16"
        transition={130}
        suffix="%"
      />
      <NumberCounter
        value={1923400}
        id="krw3"
        transition={130}
        suffix="₩/KRW"
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
