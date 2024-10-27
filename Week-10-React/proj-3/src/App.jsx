import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { usePostComponent } from "./GetPostsComp";
import { useFetch } from "./useFetchHook";
import { GrandparentCounter } from "./Recoil_SM";


function App(){

  return<>
  {/* <LightBulb/>
  <PrivateData/> */}
  {/* <PostComponent/> */}
  {/* <DataComponent/> */}
  <PrevValue/>
  {/* <GrandparentCounter/> */}
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
//using custom hook here
  const {fetchedData,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + postId)    //When destructuring objects and arrays, JavaScript requires the variable names to match the property names in the object 

  return (
    <div> 
      <button style={{margin:5, padding:5, backgroundColor : ((postId==1)?"lightblue": "white")}} onClick={() => setPostId(1)}>post 1</button>
      <button style={{margin:5, padding:5, backgroundColor : ((postId==2)?"lightblue": "white")}} onClick={() => setPostId(2)}>post 2</button>
      <button style={{margin:5, padding:5, backgroundColor : ((postId==3)?"lightblue": "white")}} onClick={() => setPostId(3)}>post 3</button>
      <button style={{margin:5, padding:5, backgroundColor : ((postId==4)?"lightblue": "white")}} onClick={() => setPostId(4)}>post 4</button>

      <h3>Data Fetch: {loading ?  "Loading..." : (fetchedData.title)}</h3>
    </div>
  );
}


// defining the usePrev
function usePrev(value){
  const ref = useRef("**");
  console.log("value stored in ref for now : ", ref.current);
  
  useEffect(()=>{
    ref.current = value;
    console.log("ref updated to : ", value)
  },[value])

 console.log("value returned : ",ref.current);

  return ref.current
}


function PrevValue(){
  const [currentValue, SetCurrentValue] = useState(0)
  const prevValue = usePrev(currentValue)

  function increase(){
    SetCurrentValue(currentValue => currentValue +1)
  }

  return <div>
    <h3>current value = {currentValue}</h3>
    <h4>previous value = {prevValue}</h4>
    <button onClick={increase}>add</button>     
  </div>
}


export default App