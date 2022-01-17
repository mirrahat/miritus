import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";

const NavbarMain = () => {

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
    
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            Miritus
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:'auto'}}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link`}
                style={{ marginTop: "8px"}}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={`${styles.nav_text} nav-link`}
                style={{ marginTop: "8px" }}
              >
                About us
              </NavLink>

              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={<span className={`${styles.nav_text} my-auto`}>Services</span>}
                id="basic-nav-dropdown"
                
              >
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" className={styles.dropdownText}>Data Analytics and Research</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" className={styles.dropdownText}>Quality Assurance</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" className={styles.dropdownText}>Cloud and IoT Based Solutions</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" className={styles.dropdownText}>IT Consultancy</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" className={styles.dropdownText}>AI Solutions</NavLink></NavDropdown.Item>

              </NavDropdown>

              
              <NavLink
                to="/contact"
                className={` ${styles.nav_text} nav-link`}
                style={{ marginTop: "8px" }}
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
