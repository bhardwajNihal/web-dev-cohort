import { useState } from "react"

function App() {

  // We can pass props as html elements, called children
  // can reuse the same component skeleton, pass different children to form diffrent components in the UI
  return(                     
    // <>
    // <CardComponent 
    // innerContent = {<div>
    //   <h2>Lorem, ipsum dolor.</h2>
    //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, rerum!</p>
    // </div>}/>
      
    //   <CardComponent 
    // innerContent = {<div>
    //   <h2>Lorem, ipsum dolor adidl, aod adfoof.</h2>
    //   <input style={{padding:5}} type="text" placeholder="type your text here"/>
    //   <button style={{padding:5}}>add</button>
    //   <p>Lorem adipisicing elit. Quaerat, rerum!</p>
    // </div>}/>
    
    // <CardComponent innerContent={
    // <div>
    //   <h3>hey, hi there</h3>
    //   <h2>How are you</h2>
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis optio reprehenderit voluptatem consequuntur! Assumenda quam voluptatem velit alias in aut. Dolor hic asperiores incidunt consequatur odio sunt quaerat fuga recusandae tempora nobis, totam expedita eum qui! Accusamus, iste. Suscipit?</p>
    //   <div style={{height:90, width:150, overflow:"hidden", objectFit:"cover", position:"center"}}><img src="https://tse1.mm.bing.net/th?id=OIP.yLf7kQVaLpxqCZX1VRHw-wHaEK&pid=Api&P=0&h=180" alt="" /></div>
    // </div>
    // }/>

    // </>

    <>
    <AddTodosComponent />
    </>
    

  )
}

// innercontent can be passed as an object with a bunch of key value pairs
function CardComponent({innerContent}){
  return <div style={{height:"auto", width:"auto", padding:30, border:"solid 2px gray", marginTop:10, borderRadius:10}}>
    {innerContent}
  </div>
}

// this function defines the content or state of the todo component, and the login to add new ones
  function AddTodosComponent(){
    const todolist = [
      {title:"hit the gym", isdone:false},  
      {title:"have breakfast", isdone:true},
      {title:"have lunch", isdone:true},    
      {title:"have dinner", isdone:false},] 

    const[todo, setTodo] = useState(todolist)

    function addNewTodo(){
      const newtodo = {title:"code a react app", isdone:true}
      setTodo(todo => [...todo, newtodo])
    }


    return <div>
      {
        todo.map((todo, index) => (
          // passing the required props
          <TodoComponent key = {index} index={index} title={todo.title} isdone={todo.isdone} />
        ))
      }
      <button onClick={addNewTodo}>Add new todo</button>
    </div>

  }


// this function/component defines the skeloton, of the todo items
  function TodoComponent({index,title, isdone}){
    return <div style={{border:'solid 1px gray', width:"50vw", borderRadius:10, margin:5, padding:"0 15px"}}>
      <h4>{index + 1}.  {title} - {isdone ? "done" : "not done"}</h4>
    </div>
  }


export default App
