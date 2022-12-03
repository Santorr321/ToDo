import React from "react";
import ReactDOM from "react-dom";
import { App } from "./APP/index";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createPortal(<App />, document.getElementById("modal"));
