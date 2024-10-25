import React from "react";
import { useState, useEffect } from "react";
import { usePostComponent } from "./GetPostsComp";
import { useFetch } from "./useFetchHook";

function App(){

  return<>
  <LightBulb/>
  <PrivateData/>
  {/* <PostComponent/> */}
  <DataComponent/>
  </>
}

// Defining a custom hook 
  function useToggle(){
    const [state, setState] = useState(false)       //setting default state as false

    function toggle(){
      setState(currentState => !currentState)
    }

    return [state, toggle]        //return the array of state, and the function to change that state
  }

// Thus we defined Two Components with a single custom hooks that has the toggle, logic instead of writting it again and again

function LightBulb(){
  const[isOn, setIsOn] = useToggle()       //destructuring the return array and gets the state and update function

  return <div>
    <button onClick={setIsOn}>Toggle Light</button>
    <h3>Light : {(isOn) ? "ON" : "OFF"}</h3>
  </div>
}

function PrivateData(){
  const [visibility, setVisibility] = useToggle() 

  return <div>
    <button onClick={setVisibility} style={{padding:5, marginTop:15}}>{(visibility) ? "Hide Data" : "Show Data"}</button>
    <h2 style={{color : "red"}}>{(visibility) ? "Here's Your PRIVATE DATA ___***" : "Data is hidden"}</h2>
  </div>
}

// This Post component just renders the data, and all the fetch logic is taken care of by the custom hook
function PostComponent(){   
  const post = usePostComponent()

  return <div>
    <h3>Data Fetch : {post}</h3>
  </div>
}

function DataComponent(){

  const[postId, setPostId] = useState(null)

  const data = useFetch("https://jsonplaceholder.typicode.com/posts/" + postId)

  return (
    <div> 
      <button style={{margin:5, padding:5}} onClick={() => setPostId(1)}>post 1</button>
      <button style={{margin:5, padding:5}} onClick={() => setPostId(2)}>post 2</button>
      <button style={{margin:5, padding:5}} onClick={() => setPostId(3)}>post 3</button>
      <button style={{margin:5, padding:5}} onClick={() => setPostId(4)}>post 4</button>

      <h3>Data Fetch: {data ? data.title : "Loading..."}</h3>
    </div>
  );
}
export default App