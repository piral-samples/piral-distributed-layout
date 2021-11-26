import "piral/polyfills";
import * as React from "react";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";

const instance = renderInstance({
  layout,
  errors,
  requestPilets() {
    // for demo purposes only - we restrict this to a generic json
    // containing references to all the pilets from this monorepo only
    return fetch("./pilets.json").then((res) => res.json());
  },
});

instance.root.registerExtension("display-content", ({ params }) => (
  <>{params}</>
));
