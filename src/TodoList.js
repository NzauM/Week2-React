function TodoList({elem}){
    return(
        <>
            <h1>{elem.task}</h1>
            <p>due in {elem.timeline}</p>
            <button>assigned to; {elem.assignedTo}</button>
            
            
        </>
    )
}

export default TodoList