import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
function App() {
  return (
    <>
      <h1>Vite + React & others</h1>
      <Todo task="Learn React" isDone={true}></Todo>

      <Todo task="React concept" isDone={false}></Todo>

      <Todo task="Try JSX" isDone={true}></Todo>
      {/* <Device name="Laptop" price="78000"></Device>
      <Device name="Watch" price="2700"></Device>
      <Device name="Mobile" price="15000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="5" score="86"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device: {props.name}, price is:{props.price}{" "}
    </h2>
  );
}

function Person() {
  const age = 22;
  const money = 22;
  const person = { name: "Tonmoy", age: 21 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = 0, score = 0 }) {
  // console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student </h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
    // {score}
    // {grade}
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };

  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>coding: </p>
    </div>
  );
}

export default App;
