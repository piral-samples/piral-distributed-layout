import "piral/polyfills";
import * as React from "react";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = "https://feed.piral.io/api/v1/pilet/empty";

const instance = renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

instance.root.registerExtension("display-content", ({ params }) => (
  <>{params}</>
));
