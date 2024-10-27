
// 1st just recap the context API method to manage states
// It's not the most optimal way of state management in react, like all the components get re-rendered even if the state associated with it remains unchanged
// So, to tackle this, we use State Management Libraries, which contains the most optimal logic of managing states
// examples are : recoil, redux, etx.


// 1st approach, we can also prevent the unnecessary re-renders using memo
import { createContext, useContext, useState,memo } from "react"

const counterContext = createContext()

export function GrandparentCounter(){

    const [count, setCount] = useState(0)

    return <counterContext.Provider value={{count,setCount}}>
        <ParentCounter/>
        </counterContext.Provider>
}

// Wrapping the components inside the memo function
// memo optimizes rendering by preventing unnecessary re-renders of the components it wraps
const ParentCounter = memo(function(){
    
    return <div>
        <CounterValue/>
        <CounterButtons/>
    </div>
})

const CounterValue =memo( function (){

    const {count} = useContext(counterContext)

    return <div>
        <h2>Count : {count}</h2>
    </div>
})

const CounterButtons = memo(function(){

    const {setCount} = useContext(counterContext)

    function IncreaseCount(){
        setCount(count => count+1)    
    }
    function DecreaseCount(){
        setCount(count => count-1)  
    }

    return <div>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
    </div>
})