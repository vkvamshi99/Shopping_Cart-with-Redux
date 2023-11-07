import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const NavbarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            ShopStop
          </Navbar.Brand>

          <Nav>
            <Nav.Link to="/product" as={Link}>
              Product
            </Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Cart {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarPanel;
