import { useContext } from 'react';
import { Navbar, Container, Badge, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
function Navibar() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className=""
                src="../images/cblogo.png"
                width="70px"
                height="60px"
                alt="brand"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.length}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
export default Navibar;
