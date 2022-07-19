import { useState } from "react";
import { Link } from "react-router-dom";

function TodoForm({onFormsubmitted}) {
    const[taskname, setTaskName] = useState("")
    const[formData, setFormData] = useState({})

    function handleTaskName(e){
        let myTask = e.target.value
        let fieldName = e.target.name

        setFormData({...formData,[fieldName]:myTask})

        console.log(fieldName)
        console.log(myTask)
        
        // setTaskName(myTask)
        
        // key:value
    }
    // console.log(formData)
    function handleFormSubmit(e){
      e.preventDefault()
      onFormsubmitted(formData)
    }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Task Name:
        <input onChange={handleTaskName}   type="text" name="task" />
      </label>
       <label>
        Assigned To:
        <input onChange={handleTaskName} type="text" name="assignedTo" />
      </label>
       <label>
        Timeline:
        <input onChange={handleTaskName} type="text" name="timeline" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoForm;