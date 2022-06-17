import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Navibar() {
    return (
        <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand><img className=''
        src="../images/cblogo.png"
        width="70px"
        height="60px"
        alt="brand"
      /></Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
    )
}
export default Navibar;