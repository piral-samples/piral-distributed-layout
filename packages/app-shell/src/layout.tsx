import * as React from "react";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  ExtensionSlot,
} from "piral";

export const errors: Partial<ErrorComponentsState> = {
  not_found: (props) => (
    <ExtensionSlot name="layout-error-not-found-container" params={props} />
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <ExtensionSlot
      name="layout-error-container"
      params={{ children: <SwitchErrorInfo {...props} /> }}
    />
  ),
  DashboardContainer: (props) => (
    <ExtensionSlot name="layout-dashboard-container" params={props} />
  ),
  DashboardTile: (props) => (
    <ExtensionSlot name="layout-dashboard-tile" params={props} />
  ),
  Layout: (props) => (
    <ExtensionSlot
      name="layout-general-container"
      empty={() => <>{props.children}</>}
      params={{
        notifications: <Notifications />,
        menu: <Menu type="general" />,
        children: props.children,
      }}
    />
  ),
  MenuContainer: (props) => (
    <ExtensionSlot name="layout-menu-container" params={props} />
  ),
  MenuItem: (props) => <ExtensionSlot name="layout-menu-item" params={props} />,
  NotificationsHost: (props) => (
    <ExtensionSlot name="layout-notifications-container" params={props} />
  ),
  NotificationsToast: (props) => (
    <ExtensionSlot name="layout-notifications-toast" params={props} />
  ),
};
