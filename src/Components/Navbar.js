import { Link } from "react-router-dom";
import React from "react";
import { PiHouse } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiPeaceDove } from "react-icons/gi";
import { BiSolidPlaneAlt } from "react-icons/bi";

const Navbar = [
  {
    label: (
      <Link to="/" className="menu_name">
        Home
      </Link>
    ),
    icon: <PiHouse className="images" />,
    key: "home",
  },
  {
    label: (
      <Link to="/household_chores" className="menu_name">
        HouseholdChores
      </Link>
    ),
    icon: <BsFillHouseAddFill className="images" />,
    key: "household",
  },
  {
    label: (
      <Link to="/job_duties" className="menu_name">
        Job duties
      </Link>
    ),
    icon: <MdWork className="images" />,
    key: "duties",
  },
  {
    label: (
      <Link to="/individual_use" className="menu_name">
        Individual Use
      </Link>
    ),
    icon: <GiPeaceDove className="images" />,
    key: "individual",
  },
  {
    label: (
      <Link to="/shopping_list" className="menu_name">
        Shopping list
      </Link>
    ),
    icon: <FaShoppingCart className="images" />,
    key: "shopping",
  },
  {
    label: (
      <Link to="/workout" className="menu_name">
        Workout
      </Link>
    ),
    icon: <CgGym className="images" />,
    key: "workout",
  },
  {
    label: (
      <Link to="/trip" className="menu_name">
        Trip
      </Link>
    ),
    icon: <BiSolidPlaneAlt className="images" style={{ fontSize: 25 }} />,
    key: "trip",
  },
];

export default Navbar;
