import { useState } from "react";
import isDarkModeContext from "./pages/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import PagesDescriptions from "./pages/PagesDescriptions";
import "./App.css";
import { Menu, ConfigProvider, theme, Layout, Button, Typography } from "antd";
import { Col, Row } from "antd";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const { Header, Content } = Layout;
// co to znaczy i robi

const App = () => {
  const [current, setCurrent] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const { defaultAlgorithm, darkAlgorithm } = theme;

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  const darkModeButtonBg = isDarkMode ? "white" : "black";

  const navbarDarkMode = (
    <Button
      className="mode_button"
      style={{
        background: darkModeButtonBg,
        color: isDarkMode ? "black" : "white",
      }}
      onClick={handleClick}
    >
      {isDarkMode ? <BsSun /> : <BsFillMoonStarsFill />}
    </Button>
  );

  return (
    <div>
      <Router>
        <isDarkModeContext.Provider value={isDarkMode}>
          <ConfigProvider
            theme={{
              algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,

              token: {
                colorPrimary: "#9400D3",
                colorBgLayout: isDarkMode ? "black" : "#dc9de3",
              },

              components: {
                Layout: {
                  colorBgHeader: "rgb(22, 210, 119)",
                },
                Menu: {
                  itemBg: "rgb(22, 210, 119)",
                },
              },
            }}
          >
            <Layout
              style={{
                width: "100vw",
                height: "100vh",
                color: isDarkMode ? "white" : "black",
              }}
            >
              <Header
                className=" header"
                style={{
                  padding: 0,
                }}
              >
                <Row>
                  <Col span={20}>
                    <Menu
                      className="menubar"
                      onClick={onClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                      items={Navbar}
                    />
                  </Col>
                  <Col span={4}>{navbarDarkMode}</Col>
                </Row>
              </Header>
              <Typography>
                <Content>
                  <Routes>
                    <Route
                      exact
                      path="/ToDoList/"
                      element={<Home key="home" />}
                    ></Route>
                    <Route
                      path="/ToDoList/household_chores"
                      element={
                        <PagesDescriptions
                          name="your Household Chores"
                          key="chores"
                          id="chores"
                        />
                      }
                    ></Route>
                    <Route
                      path="/ToDoList/job_duties"
                      element={
                        <PagesDescriptions
                          name="your Job Duties"
                          key="job"
                          id="job"
                        />
                      }
                    ></Route>
                    <Route
                      path="/ToDoList/individual_use"
                      element={
                        <PagesDescriptions
                          name="things to do for yourself
                  (to peace and to relax)"
                          key="individual_usepeace"
                          id="individual_use"
                        />
                      }
                    ></Route>
                    <Route
                      path="/ToDoList/shopping_list"
                      element={
                        <PagesDescriptions
                          name="your Shopping List"
                          key="shopping"
                          id="shopping"
                        />
                      }
                    ></Route>
                    <Route
                      path="/ToDoList/workout"
                      element={
                        <PagesDescriptions
                          name="your Workout Tasks"
                          key="workout"
                          id="workout"
                        />
                      }
                    ></Route>
                    <Route
                      path="/ToDoList/trip"
                      element={
                        <PagesDescriptions
                          name="things to take on a Trip"
                          key="trip"
                          id="trip"
                        />
                      }
                    ></Route>
                  </Routes>
                </Content>
              </Typography>
            </Layout>
          </ConfigProvider>
        </isDarkModeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
