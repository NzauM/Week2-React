import React from "react";
import { useParams } from "react-router-dom";
function TodoDetails({myTodo}){
    const params = useParams()
    console.log(params)
    console.log(myTodo)

    return(
        <>
        <h1>You are now in Todo Number: {(parseInt(params.todoId))+1}</h1>
        <h3>Your task is: {myTodo[0].task}</h3>
        </>
    )
}

export default TodoDetails;