import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container className="p-2">
        <Navbar.Brand className="nav-brand">WHATBOT.COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#intro">Introduction</Nav.Link>
            <Nav.Link href="#why">Kenapa Whatbot?</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
