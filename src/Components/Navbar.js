import logo from "./logo.png";
import { Link } from "react-router-dom";
import React from "react";
import { PiHouse } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiPeaceDove } from "react-icons/gi";

const Navbar = ({ show, set }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/" onClick={() => set(false)}>
            <PiHouse className="images" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/household_chores" onClick={() => set(false)}>
            <BsFillHouseAddFill className="images" />
            Household Chores
          </Link>
        </li>
        <li>
          <Link to="/job_duties" onClick={() => set(false)}>
            {" "}
            <MdWork className="images" />
            Job duties
          </Link>
        </li>
        <li>
          <Link to="/individual_use" onClick={() => set(false)}>
            <GiPeaceDove className="images" />
            Individual Use
          </Link>
        </li>
        <li>
          <Link to="/shopping_list" onClick={() => set(false)}>
            <FaShoppingCart className="images" />
            Shopping list
          </Link>
        </li>
        <li>
          <Link to="/workout" onClick={() => set(false)}>
            <CgGym className="images" />
            Workout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
