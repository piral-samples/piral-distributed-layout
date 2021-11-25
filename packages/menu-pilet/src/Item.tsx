import * as React from "react";

export interface ItemProps {
  type: string;
}

export const Item: React.FC<ItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
);
