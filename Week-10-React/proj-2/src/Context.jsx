
// step1 : import contexts from react
import { useContext, createContext } from "react";

// step 2 : Initializing a context
const messageContext = createContext()

export function Grandparent(){

    // setting up the value to be passed as props
    const messages = {
    message1 : "keep this blessing of 1000 rupee",
    fuddu : "Don't take it from them"
    }

// setting up the context provider
    return <messageContext.Provider value={messages}>
        <Parent/>
        </messageContext.Provider>
}

function Parent(){

    //Destructuring the values of the context 
    const {fuddu} = useContext(messageContext)

    return <div>
        <Children/>
        <h3>{fuddu}</h3>
    </div>
}

function Children(){
    const {message1} = useContext(messageContext)

    return <div>
        <h2 style={{backgroundColor:"red", color : "white", fontWeight:"bolder"}}>{message1}</h2>
    </div>
}