import "@lwc/synthetic-shadow";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Sample from "my/sample";

customElements.define("my-sample", Sample.CustomElementConstructor);

ReactDOM.render(<App />, document.getElementById("root"));
