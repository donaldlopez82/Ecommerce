import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {
  Container2,
  Row,
  Column,
  FooterLink,
  Heading,
  BlackBar,
  Padding,
} from './FooterStyles';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);
  return (
    <>
      <div>
        <br></br>
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed font-link">
          <BlackBar>
            <br></br>
            <Container2>
              <Row>
                <div className="" id="">
                  <Column>
                    <Heading>About Us</Heading>
                    <Link
                      className="link-color-two"
                      to="/Credits"
                      type="submit"
                    >
                      Locations
                    </Link>
                    <Link
                      className="link-color-two"
                      to="/CommentSection"
                      type="submit"
                    >
                      Contact
                    </Link>
                    <Link
                      className="link-color-two"
                      to="/Credits"
                      type="submit"
                    >
                      About Us
                    </Link>
                  </Column>
                </div>
                <div className=" " id="">
                  <Column>
                    <Heading>Services</Heading>
                    <Link
                      className="link-color-two"
                      to="/Support"
                      type="submit"
                    >
                      Help
                    </Link>
                    <Link
                      className="link-color-two"
                      to="/Support"
                      type="submit"
                    >
                      Cart
                    </Link>
                    <Link
                      className="link-color-two"
                      to="/Register"
                      type="submit"
                    >
                      Register
                    </Link>
                  </Column>
                </div>
                <div className="" id="">
                  <Column>
                    <Heading>Community</Heading>
                    <Link
                      className="link-color-two"
                      to="/Community"
                      type="submit"
                    >
                      Community
                    </Link>
                    <Link className="link-color-two" to="/Store" type="submit">
                      Press
                    </Link>
                    <Link
                      className="link-color-two"
                      to="/PopUpForm"
                      type="submit"
                    >
                      Careers
                    </Link>
                  </Column>
                </div>
                <div className=" " id="">
                  <Column>
                    <Heading>Social Media</Heading>
                    <FooterLink href="https://www.facebook.com/profile.php?id=100081142293284">
                      <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: '10px' }}>Facebook</span>
                      </i>
                    </FooterLink>
                    <FooterLink href="https://www.instagram.com/zombieapocalyspecyoa/">
                      <i className="fab fa-instagram">
                        <span style={{ marginLeft: '10px' }}>Instagram</span>
                      </i>
                    </FooterLink>

                    <FooterLink href="https://www.youtube.com/channel/UCFbEW_B3VRgux-5LPCrxC7g">
                      <i className="fab fa-youtube">
                        <span style={{ marginLeft: '10px' }}>Youtube</span>
                      </i>
                    </FooterLink>
                  </Column>
                </div>
              </Row>

              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse2"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}

              <Container>
                <div className="">
                  <Heading>
                    <br></br> {fullYear}-{fullYear + 1}, All Rights Reserved by
                    ComicBuy
                  </Heading>
                </div>
              </Container>
            </Container2>
          </BlackBar>
        </nav>
      </div>
    </>
  );
};
export default Footer;
