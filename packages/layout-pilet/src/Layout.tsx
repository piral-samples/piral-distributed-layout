import * as React from "react";

export interface LayoutProps {
  notifications: React.ReactNode;
  menu: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  notifications,
  menu,
  children,
}) => (
  <div>
    {notifications}
    {menu}
    <div className="container">{children}</div>
  </div>
);
