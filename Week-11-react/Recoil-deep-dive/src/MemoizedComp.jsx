import { memo, useEffect, useState } from "react"

export default function Parent(){

    // the children component re-renders everytime the state variable changes, even if the props are not being passed to them
    // to avoid this and make the application more application, we can memoize the component by wrapping it in memo
    const [stateVal, setStateVal] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            setStateVal(c => c+1)
        }, 1000);
    },[])

    return <div style={{backgroundColor:"lightpink", padding:5,width:100}}>
        <Children1/>
        <Children2/>
    </div>
}

// Now both the children component is guarded from unnecessary re-renders
const Children1 = memo(()=>{

    return <>
    <h2 style={{backgroundColor:"red", padding:5, margin:5,width:70}}>hello 1</h2>
    </>
})

const Children2 = memo(()=>{
    return <>
    <h2 style={{backgroundColor:"red", padding:5, margin:5,width:70}}>hello2</h2>
    </>
})