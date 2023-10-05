import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Frineds";

function App() {
  function handleClick() {
    alert("button Clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>

      {/* this how we normally write onclick in html before */}
      {/* <button onclick="handleClick">Click Me</button> */}

      {/* This how we will write in react*/}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Click 3
      </button>
      {/* If we have a parameter in a function we can not pass the value directly we have to pass it through Arrow function */}
      <button onClick={() => addToFive(3)}>4</button>
    </>
  );
}

export default App;
