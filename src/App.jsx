import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AbyssalDemon from "./components/AbyssalDemon"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abyssal-demon" element={<AbyssalDemon />} />
      </Routes>
    </div>
  )
}

export default App
