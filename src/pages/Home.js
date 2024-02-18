import { Col, Row } from "antd";

const Home = () => {
  return (
    <>
      <Row>
        <Col span={"24"} className="homepage">
          Hi there 😃 <br></br>
          Choose the right <b className="name">To-Do list </b>
          for you and make your life more organized.
        </Col>
      </Row>
    </>
  );
};

export default Home;
