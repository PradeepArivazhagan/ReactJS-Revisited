import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  let handleCart = () => {
    navigate("/wishlist");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login/pradeep">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up">
              Sign-Up
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/newProduct">
              New Product
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="container" color="warning" onClick={handleCart}>
              Cart
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
