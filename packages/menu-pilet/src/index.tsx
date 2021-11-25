import * as React from "react";
import { PiletApi } from "app-shell";
import { Menu } from "./Menu";
import { Item } from "./Item";

export function setup(app: PiletApi) {
  app.registerExtension("layout-menu-container", ({ params }) => (
    <Menu {...params} />
  ));
  app.registerExtension("layout-menu-item", ({ params }) => (
    <Item {...params} />
  ));
}
