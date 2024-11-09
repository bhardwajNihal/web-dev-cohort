import { Page1 } from "./practice-1-component"
import { OtpComponent } from "./practice-2-OTP"
import { SidebarComponent } from "./practice-3-sidebar"

function App() {

  // Grids in tailwind and responsiveness
  return (
    // <div className="parent grid lg:grid-cols-3 grid-cols-1 text-center">
    //   <div className="children bg-red-400">1</div>
    //   <div className="children bg-blue-400">2</div>
    //   <div className="children bg-green-400">3</div>
    // </div>
    // <Page1/>
    // <OtpComponent/>

    <SidebarComponent/>
  )
}

export default App
