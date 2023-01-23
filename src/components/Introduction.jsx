import { Col, Container, Row, Image } from "react-bootstrap";
import ChatImage from "../assets/img/chat.svg";

const Introduction = () => {
  return (
    <div className="intro">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={12} className="text-center px-5">
            <h3>Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. voluptate labore tempora voluptatibus.</p>
          </Col>
          <Col lg={8}>
            <Image src={ChatImage} alt={"chat-bot"} style={{ width: "800px" }} />
          </Col>
          <Col lg={4}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur molestias natus soluta repellat praesentium pariatur odit ducimus facilis quae!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
