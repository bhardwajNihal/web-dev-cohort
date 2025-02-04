
// // Intro

// import { atom, RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"

// // defining an atom 

// const CounterAtom = atom({
//     default: 0, // initial value for the state
//     key: "Counter" // unique identifier for this state
// });


// export function GrandparentCounter(){

//     return (
//        <RecoilRoot>
//              <ParentComponent/>
//         </RecoilRoot>
//     )
// }


// function ParentComponent(){
    
//     return <div>
//         <CounterValue/>
//         <CounterButtons/>
//     </div>
// }

// function CounterValue(){

//     const count = useRecoilValue(CounterAtom)           //subscribing to the value the atom

//     return <div>
//         <h2>Count : {count}</h2>
//     </div>
// }

// function CounterButtons(){

//     const setCount = useSetRecoilState(CounterAtom)      //useSetRecoilState(CounterAtom) in CounterButtons gives you access to a setter function for CounterAtom

//     function IncreaseCount(){
//         setCount(count => count+1)      //setCount is a local variable name for the setter function tied to CounterAtom 
//     }
//     function DecreaseCount(){
//         setCount(count => count-1)  
//     }

//     return <div>
//         <button onClick={IncreaseCount}>Increase</button> <br />
//         <button onClick={DecreaseCount}>Decrease</button>
//     </div>
// }