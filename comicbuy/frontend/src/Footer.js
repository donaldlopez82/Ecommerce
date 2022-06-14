import React, { useState, useEffect } from 'react';
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
        <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed font-link">
          <BlackBar>
            <Container2>
              <Row>
                <div className="" id="">
                  <Column>
                    <Heading>About Us</Heading>
                    <Link to="/Credits" type="submit">
                      Locations
                    </Link>
                    <Link to="/CommentSection" type="submit">
                      Press
                    </Link>
                    <Link to="/Credits" type="submit">
                      About Us
                    </Link>
                  </Column>
                </div>
                <div className=" " id="">
                  <Column>
                    <Heading>Services</Heading>
                    <Link to="/Support" type="submit">
                      Help
                    </Link>
                    <Link to="/Support" type="submit">
                      Contact
                    </Link>
                    <Link to="/Register" type="submit">
                      Register
                    </Link>
                  </Column>
                </div>
                <div className="" id="">
                  <Column>
                    <Heading>Community</Heading>
                    <Link to="/Community" type="submit">
                      Community
                    </Link>
                    <Link to="/Store" type="submit">
                      Store
                    </Link>
                    <Link to="/PopUpForm" type="submit">
                      Careers
                    </Link>
                  </Column>
                </div>
                <div className=" " id="">
                  <Column>
                    <br></br>
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
                <div className=''>
                 
                  <Heading><br></br> {fullYear}-{fullYear + 1}, All Rights Reserved by
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
