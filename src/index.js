import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./global.css";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
