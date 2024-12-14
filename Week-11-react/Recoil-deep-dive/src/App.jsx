import { RecoilRoot } from "recoil"
import { Counter } from "./components/Counter"
import { Topbar } from "./components/Topbar"

import { Todos } from "./components/Todos"

function App() {
 

  return <div>
    {/* <GrandparentCounter/>
    <Parent/>  */}

      <h2>recoil</h2>
      {/* <Counter/> */}

      <RecoilRoot>
      {/* <Topbar/> */}

      {Array(5).fill(null).map((_, index) => <Todos key={index} id={index+1}/>)}

      </RecoilRoot>

  </div>
}

export default App
