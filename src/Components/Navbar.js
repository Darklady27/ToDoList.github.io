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
    label: <Link to="/ToDoList/">Home</Link>,
    icon: <PiHouse />,
    key: "home",
  },
  {
    label: <Link to="/ToDoList/household_chores">Household Chores</Link>,
    icon: <BsFillHouseAddFill />,
    key: "household",
  },
  {
    label: <Link to="/ToDoList/job_duties">Job duties</Link>,
    icon: <MdWork />,
    key: "duties",
  },
  {
    label: <Link to="/ToDoList/individual_use">Individual Use</Link>,
    icon: <GiPeaceDove />,
    key: "individual",
  },
  {
    label: <Link to="/ToDoList/shopping_list">Shopping list</Link>,
    icon: <FaShoppingCart />,
    key: "shopping",
  },
  {
    label: <Link to="/ToDoList/workout">Workout</Link>,
    icon: <CgGym />,
    key: "workout",
  },
  {
    label: <Link to="/ToDoList/trip">Trip</Link>,
    icon: <BiSolidPlaneAlt style={{ fontSize: 18 }} />,
    key: "trip",
  },
];

export default Navbar;
