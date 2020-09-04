import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/cod-logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faJediOrder,
} from "@fortawesome/free-brands-svg-icons";

const Nav = styled.div`
  /* position: absolute; */
  top: 0;
  width: 100%;
  background: transparent;
  z-index: 100;
  color: white;
`;

const NavCenter = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.25rem;

  img {
    width: 200px;
    @media (max-width: 500px) {
      width: 125px;
    }
  }
`;

const NavLinks = styled.ul`
  height: auto;
  display: flex;
  background: none;
  position: relative;
  width: auto;
  padding-top: 0;
  font-size: 1rem;
  list-style-type: none;

  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
    @media (max-width: 500px) {
      font-size: .5rem;
      display: none;
    }

    :hover {
      color: #d0a137;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  line-height: 0;
  @media (max-width: 500px) {
    display: none;
  }

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 1rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="call of duty modern warfare logo" />
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </NavLinks>
        </NavHeader>
        <SocialLinks>
          <a href="https://www.instagram.com/callofduty">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/callofduty">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.callofduty.com">
            <FontAwesomeIcon icon={faJediOrder} />
          </a>
        </SocialLinks>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;
