import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AbyssalDemon from "./components/AbyssalDemon"
import Nechryael from "./components/Nechryael"
import BlackDemon from "./components/BlackDemon"
import Gargoyle from "./components/Gargoyle"
import AberrantSpectre from "./components/AberrantSpectre"
import Bloodveld from "./components/Bloodveld"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abyssal-demon" element={<AbyssalDemon />} />
        <Route path="/nechryael" element={<Nechryael />} />
        <Route path="/black-demon" element={<BlackDemon />} />
        <Route path="/gargoyle" element={<Gargoyle />} />
        <Route path="/aberrant-spectre" element={<AberrantSpectre />} />
        <Route path="/bloodveld" element={<Bloodveld />} />
      </Routes>
    </div>
  )
}

export default App
