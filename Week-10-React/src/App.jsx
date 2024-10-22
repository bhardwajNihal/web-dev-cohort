
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { useRef, useState } from 'react'
function App() {


  return (
    // Routes in React
    //   <div>  
      
      
    //   <BrowserRouter>
    //   {/* a more cleaner way of routing, unlike anchor tag, it doesn't change the whole page, rather changes only the underlying html, thus serving the purpose of a single page application */}
    //   <Link to="/">Home</Link>_ | _
    //   <Link to="/jee/online-coaching-11">class-11</Link>_ | _
    //   <Link to="/jee/online-coaching-12">class-12</Link>
      
    //     <Routes>
    //         <Route path= "/" element = {<LandingPage />} />
    //         <Route path = "/jee/online-coaching-11" element = {<JeeClass11 />}/>
    //         <Route path = "/jee/online-coaching-12" element = {<JeeClass12 />}/>
    //         {/* if none of the routes are hit, use the default route to show 404 */}
    //         <Route path = "*" element = {<DefaultPath />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>


    <div>
      <SampleComponent  />
    </div>
  )
}

//components
function DefaultPath(){
  return <div>
    <h1 style={{color:"red"}}>404 : page not found</h1>
  </div>
}

function LandingPage(){
  return <div>
    <h2>Welcome your Online Coaching!!!</h2>
  </div>
}

function JeeClass11(){
  return <div>
    <h3>Welcome to class-11 Coaching!</h3>
    <p>Here are all your materials.</p>
  </div>
}
function JeeClass12(){
  const navigate = useNavigate();

  function RedirectUser(){
    navigate("/")
  }

  setTimeout(() => {
    RedirectUser()
  }, 5000);
  return <div>
    <h3>Welcome to class-12 Coaching!</h3>
    <p>Here are all your materials.</p> <br />
    {/* <button onClick={RedirectUser}>Back to Home</button> */}
  </div>
}


// UseRef hook : 
  // 1. use to create a variable, whole value is to be persisted across re-renders
  // 2. used to manipulate DOM elements by creating their reference, which is used to itentify them, which manual getElement, or QuerySelector

  function SampleComponent(){
    const [count, setCount] = useState(0)

// the value of value is persisted on every re-render
    let value = useRef(0)
    console.log(value.current);
    
    function Increment(){
      value.current += 1
      setCount(count => count + 1)
    }

// 2nd usecase of useRef i.e to create a reference to a DOM element for its mainpulation
    // define reference
    let btnRef = useRef()

    let changed = useRef(false)
    function ChangeColor(){
      (changed.current == false) ? btnRef.current.style.backgroundColor = "red" : btnRef.current.style.backgroundColor = "blue"
      changed.current = !changed.current
    }


    return <div>
      <h3>Count : {count}</h3>
      {/* Assign reference */}
      <button onClick={Increment} ref={btnRef} style={{padding:5, margin:5, color:'white', backgroundColor:"blue"}}>Add</button>
      <button onClick={ChangeColor} style={{padding:5}}>Change color</button>
    </div>
  }



export default App
