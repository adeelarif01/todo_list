import React, { useReducer, useState } from 'react'

export default function Todo() {
  
  function reducer(todos,action){

    switch(action.type){

        case 'ADD TASK':return ([...todos,action.payload])
        case 'COMPLETE TASK':return(
                todos.map(todo=>{
                    if(todo.id == action.payload.id){
                        return {...todo, status:1}
                    }
                   
                   return todo  
                   
                }) 
            )
        case 'REMOVE TASK':return(todos.filter((todo)=>(todo.id !== action.payload.id)))
        
    }





  }
  const [todos,dispatch] = useReducer(reducer,[])
  const [task,setTask] = useState('')



  function createTask(e){

    e.preventDefault()
    const id = Date.now();
    let todo = {id,task,status:0}

    dispatch({type:'ADD TASK',payload:todo})

  }
  
  
//   console.log(todos);
  
  
  
  
  
  
  
  
  
  
    return (
    <>
    <div className="container">
        <div className="row justify-content-center align-content-center" style={{minHeight:"100vh"}} >
            <div className="col-8">
                <div className="card">
                    <div className="card-header">
                        <h3 className='text-center' >TODO</h3>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={(e)=>{createTask(e)}}>
                            <input type="text" className='form-control my-3' onChange={(e)=>{setTask(e.target.value)}} placeholder='Enter the task' />
                            <input type="submit" className='form-control my-3 btn btn-secondary ' value='Create Task' />
                        </form>
                        <ul className='list-group' >
                            {todos.map(todo=>(

                                todo.status == 1
                                ?
                                // console.log('I am clicked')
                                <li className='list-group-item text-decoration-line-through' >
                                    {todo.task}
                                    <botton className='btn btn-danger float-end mx-2' >Remove Task</botton>
                                </li>
                                :
                                <li className='list-group-item' >
                                    {todo.task}
                                    <botton className='btn btn-danger float-end mx-2' onClick={()=>{dispatch({type:'REMOVE TASK',payload:{id:todo.id}})}}>Remove Task</botton>
                                    <botton className='btn btn-success float-end mx-2' onClick={()=>{dispatch({type:'COMPLETE TASK',payload:{id:todo.id}})}} >Complete Task</botton>

                                </li>)



                            )}

                        </ul>
                    </div>
                </div>
            </div>        
        </div>  
    </div>  
    
    
    
    
    
    </>
  )
}
