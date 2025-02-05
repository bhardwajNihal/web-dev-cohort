import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"

function App() {

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </div>
  )
}

export default App
