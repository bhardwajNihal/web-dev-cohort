import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { CounterAtom, EvenSelector } from "../Store/atoms/CounterAtom"

export function Counter() {

    return <div>
        <RecoilRoot>
            <CounterVal />
            <IncreaseCounter />
            <DecreaseCounter />
            <CheckEven/>
        </RecoilRoot>
    </div>
}

// this component only needs the current value of the count and not any setter functions
function CounterVal() {
    const count = useRecoilValue(CounterAtom)
    return <div>
        {count}
    </div>
}

// only setter functions needed
function IncreaseCounter() {

    const setCount = useSetRecoilState(CounterAtom)

    return <div>
        <button onClick={()=> setCount(c => c+2)}>Increase</button>
    </div>
}


function DecreaseCounter() {

    const setCount = useSetRecoilState(CounterAtom)             //This hook only updates the value of a Recoil atom but   does not read its value.

    return <div>
        <button onClick={()=> setCount(c => c-1)}>Decrease</button>
    </div>
}

// re-rendering is so optimised now, 
function CheckEven(){

    const isEven = useRecoilValue(EvenSelector)

    return <div>
        <h2>{(isEven) ? "Even" : "Odd"}</h2>        
    </div>
}