import * as React from "react";

export interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({ children }) => (
  <div className="notifications">{children}</div>
);
