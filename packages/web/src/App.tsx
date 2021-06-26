import { Classes } from "@blueprintjs/core";
import * as React from "react";

import "./App.scss";
import { WebButton } from "./WebButton";

export function App() {
  return (
    <div className={Classes.DARK}>
      <h1>Hello from Monorepo Web</h1>
      <WebButton />
    </div>
  );
}
