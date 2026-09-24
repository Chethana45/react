import React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Practice</h1>
      <p className="subtitle">
        A collection of basic React components and concepts.
      </p>

      <div className="container">
        <Greeting name="Chethana" />

        <UserCard
          name="Chethana Sri"
          role="CSE Student"
        />

        <Counter />

        <TodoList />
      </div>
    </div>
  );
}

export default App;
