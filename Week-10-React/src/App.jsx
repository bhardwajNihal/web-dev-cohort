
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {


  return <div>  
    {/* this logic will appear in all pages, there's no condition here */}
    
    <BrowserRouter>
    {/* a more cleaner way of routing, unlike anchor tag, it doesn't change the whole page, rather changes only the underlying html, thus serving the purpose of a single page application */}
    <Link to="/">Home</Link>_ | _
    <Link to="/jee/online-coaching-11">class-11</Link>_ | _
    <Link to="/jee/online-coaching-12">class-12</Link>
    
      <Routes>
          <Route path= "/" element = {<LandingPage />} />
          <Route path = "/jee/online-coaching-11" element = {<JeeClass11 />}/>
          <Route path = "/jee/online-coaching-12" element = {<JeeClass12 />}/>
          {/* if none of the routes are hit, use the default route to show 404 */}
          <Route path = "*" element = {<DefaultPath />} />
      </Routes>
    </BrowserRouter>
  </div>
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



export default App
