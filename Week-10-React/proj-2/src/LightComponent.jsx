import { createContext, useContext, useState } from "react";

const BulbContext = createContext()

// wrapping all the context logic inside a single function for better readability,
function BulbContextProvider({children}){
    
    const [isBulbOn, setBulbState] = useState(true)

    return<BulbContext.Provider value = {{isBulbOn, setBulbState}}>
        {children}
    </BulbContext.Provider>
}

export function LightComponent(){

    return <BulbContextProvider>
        <Bulb/>
    </BulbContextProvider>
    
}

function Bulb(){

    return <div>
        <BulbState/>
        <ToggleBulbState/>
    </div>
}

function BulbState(){
    const {isBulbOn} = useContext(BulbContext)

    return <div>
        <h2>Bulb : {(isBulbOn) ? "ON" : "OFF"}</h2>
    </div>
}

function ToggleBulbState(){
    const {setBulbState} = useContext(BulbContext)
    return <div>
        <button onClick={() => setBulbState(isBulbOn => !isBulbOn)}>Toggle Bulb state</button>
    </div>
}