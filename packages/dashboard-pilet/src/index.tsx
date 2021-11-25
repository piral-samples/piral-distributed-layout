import "./style.scss";
import * as React from "react";
import { PiletApi } from "app-shell";
import { Dashboard } from "./Dashboard";
import { Tile } from "./Tile";

export function setup(app: PiletApi) {
  app.registerExtension("layout-dashboard-container", ({ params }) => (
    <Dashboard {...params} />
  ));
  app.registerExtension("layout-dashboard-tile", ({ params }) => (
    <Tile {...params} />
  ));
}
