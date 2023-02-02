import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsSnow2 } from "react-icons/bs";
import { GiFallingLeaf, GiFireFlower } from "react-icons/gi";
import { AiFillBulb, AiFillHome } from "react-icons/ai";
import logo from "../../assets/logo.png";
import "./navBar.scss";

export default function NavBar() {
  const activeStyle = {
    backgroundColor: "transparent",
    color: "#010d18",
    borderradius: "2.5rem",
    border: "1px solid #2a6f8d",
  };

  return (
    <div className="navbarContainer">
      <ul className="main-nav-bar">
        <img className="logoNavBar" src={logo} alt="logo" />
        <NavLink
          to="/"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <AiFillHome /> Home
          </li>
        </NavLink>
        <NavLink
          to="/printemps"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <GiFireFlower /> Printemps
          </li>
        </NavLink>
        <NavLink
          to="/ete"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <BsFillSunFill />
            Été
          </li>
        </NavLink>
        <NavLink
          to="/automne"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <GiFallingLeaf />
            Automne
          </li>
        </NavLink>
        <NavLink
          to="/hiver"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <BsSnow2 /> Hiver
          </li>
        </NavLink>

        <NavLink
          to="/autres"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">
            <AiFillBulb /> Autres
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
