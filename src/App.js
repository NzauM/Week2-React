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
import TodoDetails from "./TodoDetails";
import Home from "./Home";

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
    
      <Switch>
        {/* <Route path={`/todo/:id`}>
          <TodoDetails />
        </Route> */}

        <Route path={`/todoform`}>
          <TodoForm onFormsubmitted={handleFormSubmitted} />
        </Route>
        {/* <Route path={`${match.url}/:todoId`}> */}
        <Route path={`/todos/:todoId`}>
          <TodoDetails myTodo={myTodos}></TodoDetails>
          {/* <TodoForm onFormsubmitted={handleFormSubmitted} /> */}
        </Route>
        <Route path="/todos">{showTodos}</Route>
        <Route path="/"><Home/></Route>
        
      </Switch>
      {/* <BrowserRouter>
    <Routes>

    <Route path='/todoform' element={<TodoForm onFormsubmitted = {handleFormSubmitted}/>} />
    <Route path='/' element={showTodos}/>

    </Routes>      
    </BrowserRouter> */}
    </div>
  );
}

export default App;
