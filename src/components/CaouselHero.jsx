import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import ChatImage from "../assets/img/invest.svg";
import SolutionImage from "../assets/img/chat.svg";

const ImageStyle = { width: "calc(100vh - 200px)" };

function CarouselHero() {
  return (
    <Carousel className="pt-3 my-carousel" controls={false}>
      <Carousel.Item>
        <Container>
          <Row className="my-carousel-content">
            <Col>
              <h3>First slide label</h3>
              <div className="description">
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </Col>
            <Col>
              <Image src={ChatImage} alt="chat" style={ImageStyle} />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="my-carousel">
          <Row className="my-carousel-content">
            <Col>
              <h3>Whatsapp API Solution</h3>
              <div className="description">
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </Col>
            <Col>
              <Image src={SolutionImage} alt="solution" style={ImageStyle} />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;
