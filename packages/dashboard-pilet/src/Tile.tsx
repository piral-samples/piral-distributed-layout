import * as React from "react";

export interface TileProps {
  columns: number;
  rows: number;
}

export const Tile: React.FC<TileProps> = ({ columns, rows, children }) => (
  <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
);
