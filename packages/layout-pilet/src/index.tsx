import "./style.scss";
import * as React from "react";
import { PiletApi } from "app-shell";
import { ErrorInfo, NotFoundErrorInfo } from "./ErrorInfo";
import { Layout } from "./Layout";
import { Notifications } from "./Notifications";
import { Toast } from "./Toast";

export function setup(app: PiletApi) {
  app.registerExtension("layout-general-container", ({ params }) => (
    <Layout {...params} />
  ));
  app.registerExtension("layout-error-container", ({ params }) => (
    <ErrorInfo {...params} />
  ));
  app.registerExtension("layout-error-not-found-container", ({ params }) => (
    <NotFoundErrorInfo {...params} />
  ));
  app.registerExtension("layout-notifications-container", ({ params }) => (
    <Notifications {...params} />
  ));
  app.registerExtension("layout-notifications-toast", ({ params }) => (
    <Toast {...params} />
  ));
}
