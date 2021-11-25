import * as React from "react";
import { PiletApi } from "app-shell";
import { Link } from "react-router-dom";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface PageProps {
  data: Array<TodoItem>;
}

const Page: React.FC<PageProps> = ({ data }) => (
  <div>
    <h1>Available Todos</h1>
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export function setup(app: PiletApi) {
  const connect = app.createConnector(() =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    )
  );

  app.registerTile(
    () => (
      <div style={{ fontSize: "2em", color: "green" }}>Welcome to Piral!</div>
    ),
    {
      initialColumns: 2,
      initialRows: 2,
    }
  );

  app.registerMenu(() => <Link to="/foo">Sample</Link>);
  
  app.registerPage("/foo", connect(Page));
}
