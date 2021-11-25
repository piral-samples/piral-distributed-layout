import * as React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";

const defaultMenuItems = (
  <>
    <Item type="general">
      <Link className="nav-link text-dark" to="/not-found">
        Not Found
      </Link>
    </Item>
  </>
);

export interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  return (
    <header>
      <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Piral
          </Link>
          <button
            aria-label="Toggle navigation"
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="navbar-toggler mr-2"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
              collapsed ? "" : "show"
            }`}
            aria-expanded={!collapsed}
          >
            <ul className="navbar-nav flex-grow">
              {children}
              {defaultMenuItems}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
