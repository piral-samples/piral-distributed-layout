import * as React from "react";

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://piral.io/">Piral</a>
        <br />
        for next generation portals
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <br />
        for writing scalable web apps
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://reactjs.org/">React</a>
        <br />
        for building components
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="http://getbootstrap.com/">Bootstrap</a>
        <br />
        for layout and styling
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://sass-lang.com">Sass</a>
        <br />
        for crafting custom styles
      </div>
    </div>
  </>
);

export interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new microfrontend app shell, built with:</p>
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  );
};
