import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Tonmoy", "Shuvo", "Meghla", "Bimol", "Kalpona"];

  const singers = [
    { id: 1, name: "Eva Roy", age: 38 },
    { id: 2, name: "Anik Sutradhar", age: 44 },
    { id: 3, name: "Jova Saha", age: 57 },
    { id: 4, name: "Manik Mia", age: 23 },
  ];

  return (
    <>
      <h1>Vite + React & others</h1>

      {/* SInger------->>> */}
      <Singer name="Tonmoy Sutradhar" age="22"></Singer>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {/* Actor------------>> */}
      {/* <Actor name="Tonmoy Sutradhar Tonu"></Actor> */}

      {/* Dynamic vabe name dekhano */}
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="React concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* Device------------>>> */}
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
