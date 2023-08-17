import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import JobDuties from "./pages/JobDuties";
import IndividualUse from "./pages/IndividualUse";
import ShoppingList from "./pages/ShoppingList";
import Workout from "./pages/Workout";
import Trip from "./pages/Trip";
import HouseholdChores from "./pages/HouseholdChores";
import { TiThMenu } from "react-icons/ti";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <header>
        <TiThMenu onClick={() => setShowNav(!showNav)} />
      </header>

      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/household_chores" element={<HouseholdChores />}></Route>
          <Route path="/job_duties" element={<JobDuties />}></Route>
          <Route path="/individual_use" element={<IndividualUse />}></Route>
          <Route path="/shopping_list" element={<ShoppingList />}></Route>
          <Route path="/workout" element={<Workout />}></Route>
          <Route path="/trip" element={<Trip />}></Route>
        </Routes>
        <Navbar show={showNav} set={setShowNav} />
      </div>
    </Router>
  );
}

export default App;
