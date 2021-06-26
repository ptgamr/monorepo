import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

const div = document.createElement("div");
div.id = "app";
document.body.appendChild(div);

ReactDOM.render(React.createElement(App), div);
