// import logo from './logo.svg';
import "./App.css";
import TodoList from "./TodoList";
import { useState } from "react";
import TodoForm from "./TodoForm";
import {
  Switch,
  BrowserRouter,
  Route,
  Routes,
  Router,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const existingTodos = [
    {
      task: "Prepare for Phase 2 lectures",
      assignedTo: "Mercy",
      timeline: "3 days",
    },
    {
      task: "Reading Novel",
      assignedTo: "Daisy",
      timeline: "1 week",
    },
    {
      task: "Submitting assignments",
      assignedTo: "Oscar",
      timeline: "10 days",
    },
  ];

  const [myTodos, setMyTodos] = useState(existingTodos);

  const match = useRouteMatch();
  console.log(match);
  // console.log(`${match.url}:todoId`)

  const showTodos = myTodos.map((elem, index) => {
    // console.log(index)
    return <TodoList key={index} elem={elem} myindex={index} />;
  });

  function handleFormSubmitted(formData) {
    alert("Hello There");
    console.log(formData);
    setMyTodos([...myTodos, formData]);
  }

  return (
    <div className="App">
    {showTodos}
    <TodoForm onFormsubmitted={handleFormSubmitted}></TodoForm>
    </div>
  );
}

export default App;
