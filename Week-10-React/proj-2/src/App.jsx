import React from "react"
import { useState } from "react"
import { Grandparent } from "./Context"
import { LightComponent } from "./LightComponent"

function App() {

  return (
    <div>
      <LightComponent/>     

      {/* <Grandparent/> */}
    </div>
  )
}

// // STATE LIFTING
  // // This is how the state has been lifted to the top level component, so that all of its clildren can share that
  //   function LightComponent(){
  //     const [isLightOnn, setLight] = useState(true)       // this state is completely lifted up towards, the parent so as to be accessed by multiple children, successively
  //     return <div>
  //       <Bulb isLightOnn={isLightOnn}/>
  //       <ToggleBulb setLight = {setLight}/>
  //     </div>
  //   }

  // // Child components 
  //   function Bulb({ isLightOnn }){            // difining the isLightOnn state here could have made the setLight function inaccessible to the ToggleBulb component, thus it's needed to be lifted up 
  //     return <div>
  //       <h3>light bulb : {isLightOnn ? "ON" : "OFF"}</h3>
  //     </div>
  //   }

  //   function ToggleBulb({ setLight }){
  //     function setBulb(){
  //       setLight(isLightOnn => !isLightOnn  )
  //     }
  //     return <div>
  //       <button onClick={setBulb}>Toggle bulb</button>
  //     </div>
  //   }


// PROP DRILLING 
// occurs when you pass data (props) from a parent component down to multiple nested child components,even if only a deeply nested child component actually needs the data. 
// This can lead to complexity as the number of levels grows, since each intermediate component has to pass the props down even if they don’t directly need them.


  // function Grandparent(){
  //   return <>
  //   <Parent message = {"Hello from grandparent!"}></Parent>
  //   </>
  // }

  // function Parent({message}){
  //   return <>
  //     <Child message = {message}/>
  //   </>
  // }

  // //here, as the child is contained in the parent there is no way, to pass the props from the grandparent directly to the children, it's needed to be passed through the parent, Thus making the code redundant, unreadable, and often hard to maintain if the codebase grows, as components possesses those props also whom it doesn't actually renders
  // function Child({message}){      
  //   return <>
  //   <h3>{message}</h3>
  //   </>
  // }



export default App


