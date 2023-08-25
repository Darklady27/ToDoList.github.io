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
import "./App.css";
import { Menu, ConfigProvider, theme, Layout, Button } from "antd";
const { Header, Content } = Layout;

const App = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  const navbarDarkMode = Navbar.concat({
    label: (
      <Button className="mode_button" onClick={handleClick}>
        Change Theme to {isDarkMode ? "Light" : "Dark"}
      </Button>
    ),
    key: "style-mode",
  });

  return (
    <div>
      <Router>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            token: {
              colorPrimary: "#EEE5F1",
            },
          }}
        >
          <Layout>
            <Header>
              <Menu
                className="menubar"
                onClick={onClick}
                selectedKeys={[current]}
                color="red"
                mode="horizontal"
                items={navbarDarkMode}
              />
            </Header>
            <Content>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  path="/household_chores"
                  element={<HouseholdChores />}
                ></Route>
                <Route path="/job_duties" element={<JobDuties />}></Route>
                <Route
                  path="/individual_use"
                  element={<IndividualUse />}
                ></Route>
                <Route path="/shopping_list" element={<ShoppingList />}></Route>
                <Route path="/workout" element={<Workout />}></Route>
                <Route path="/trip" element={<Trip />}></Route>
              </Routes>
            </Content>
          </Layout>
        </ConfigProvider>
      </Router>
    </div>
  );
};

export default App;
