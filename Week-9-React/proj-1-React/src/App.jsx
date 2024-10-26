import { useEffect, useState } from "react"


// the main component that is actually exported to the main.jsx file and is rendered
function App() {
 
  return(         //jsx must return a single parent element only
    <div>               
    <h1>hi there!</h1> <br />
    <h2>this is my 1st react project</h2>
    <Counter></Counter>
    <Timer></Timer>
   </div>
  )
}


    function Counter(){               //React components should be capitalized conventionally

      const [count, setCount] = useState(0)

      function Increasecounter(){
        setCount(count+1)
      }
      function decreaseCounter(){
        setCount(count-1)
      }
      function reset(){
        setCount(0)
      }

      return <div>
        <h1>count : {count}</h1>
        <button onClick={Increasecounter}>Increase counter</button>
        <button onClick={decreaseCounter}>Decrease counter</button>
        <button onClick={reset}>reset</button>
      </div>
    }


  // another timer component

    function Timer(){
      
      const [timerValue, setTimer] = useState(0)
        // console.log("reloaded");

      useEffect(()=>{
        // console.log("first Mount");
        setInterval(() => {                               //setInterval is triggered only once, when the component is mounted or rendered for the first time
          setTimer(timerValue => timerValue + 1)        //timer is updated every 1 seconds
        // console.log("2nd mount");
        }, 1000);
        
        
      },[])              // Empty array means this effect runs only once when the component mounts


      return <div>
        <h1>timer : {timerValue}</h1>
      </div>
    }



export default App
