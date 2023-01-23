import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import ArtificialImage from "../assets/img/artificial.svg";
import ManageImage from "../assets/img/manage.svg";
import OmsetImage from "../assets/img/omset.svg";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="text-center px-5 mb-2 flex-fill">
            <h3>Introduction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. voluptate labore tempora voluptatibus.</p>
          </Col>
          <Col lg={10}>
            <Carousel className="intro-carousel">
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col lg={7}>
                      <Image src={ArtificialImage} alt={"chat-bot"} className="img-fluid" />
                    </Col>
                    <Col lg={5}>
                      <h3>Dibuat dengan AI</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur molestias natus soluta repellat praesentium pariatur odit ducimus facilis quae!</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col lg={7}>
                      <Image src={ManageImage} alt={"chat-bot"} className="img-fluid" />
                    </Col>
                    <Col lg={5}>
                      <h3>Mudah untuk memanage</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur molestias natus soluta repellat praesentium pariatur odit ducimus facilis quae!</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item>
                <Container>
                  <Row>
                    <Col lg={7}>
                      <Image src={OmsetImage} alt={"chat-bot"} className="img-fluid" />
                    </Col>
                    <Col lg={5}>
                      <h3>Naikan omset perusahaan hingga 300%</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur molestias natus soluta repellat praesentium pariatur odit ducimus facilis quae!</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
