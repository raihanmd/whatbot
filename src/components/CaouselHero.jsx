import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import ChatImage from "../assets/img/invest.svg";
import SolutionImage from "../assets/img/chat.svg";

function CarouselHero() {
  return (
    <Carousel className="pt-3 my-carousel" controls={false}>
      <Carousel.Item>
        <Container>
          <Row className="my-carousel-content">
            <Col xl={4} xs={12}>
              <h3>First slide label</h3>
              <div className="description">
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </Col>
            <Col xl={8}>
              <Image src={ChatImage} alt="chat" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="my-carousel">
          <Row className="my-carousel-content">
            <Col xl={4} xs={12}>
              <h3>
                Whatsapp <h3 className="text-warning d-inline">API</h3> Solution
              </h3>
              <div className="description">
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </Col>
            <Col xl={8}>
              <Image src={SolutionImage} alt="solution" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHero;
