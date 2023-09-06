import { NavLink } from "react-router-dom"
import bannerLogo from "../assets/wjbetech-logo.png"

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="banner-logo">
          <a href="https://github.com/wjbetech">
            <img src={bannerLogo} alt="" />
          </a>
        </div>
        <NavLink
          to="/abyssal-demon"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Abyssal Demon
        </NavLink>
        <NavLink
          to="/nechryael"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Nechryael
        </NavLink>
        <NavLink
          to="/black-demon"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Black Demon
        </NavLink>
        <NavLink
          to="/gargoyle"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Gargoyle
        </NavLink>
        <NavLink
          to="/aberrant-spectre"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Aberrant Spectre
        </NavLink>
        <NavLink
          to="/bloodveld"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Bloodveld
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
