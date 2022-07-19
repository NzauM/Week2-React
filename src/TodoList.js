import { Link, Route, useRouteMatch, useParams } from "react-router-dom"
import TodoDetails from "./TodoDetails";


function TodoList({elem, myindex}){
    // const params = useParams();
    // console.log(params)
    const match = useRouteMatch();
    console.log(match)
    // console.log(`${match.url}:${elem.myindex}`)
    
    console.log(myindex)
    return(
        <>
            <h1>{elem.task}</h1>
            <p>due in {elem.timeline}</p>
            <button>assigned to; {elem.assignedTo}</button>
            {/* <Route path={`${match.url}/:${id}`}>
               <TodoDetails task={task}/>
               See Details
            </Route> */}
            <button>
            {/* <Link to={`/${myindex}`}>see Details</Link> */}
            <Link to={`${match.url}/${myindex}`}>see Details</Link>
            </button>
          
             <button>
            <Link to="/todoform">Go home </Link>
            </button>
            
        </>
    )
}

export default TodoList