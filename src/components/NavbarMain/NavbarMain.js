import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
const NavbarMain = () => {

  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([ true, false, false, false ]);
  const [expand, setExpand] = useState(false);

  const closeNav = ()=>{
    setExpand(false);
  }

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));

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
        onToggle={()=>{setExpand(prevState => !prevState)}}
        expanded={expand}
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            Miritus
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:'auto'}} >
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px"}}
                onClick={() => {handleActiveNav(0); closeNav()}}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {handleActiveNav(1); closeNav()}}
              >
                About us
              </NavLink>

              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/services" style={{textDecoration:'none'}} className={styles.dropicon} onClick={() => {handleActiveNav(2); closeNav()}}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/sMediaService" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Social Media Marketing</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Quality Assurance</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>Cloud and IoT Based Solutions</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>IT Consultancy</NavLink></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><NavLink to="/hello" onClick={() => {handleActiveNav(2); closeNav()}} className={styles.dropdownText}>AI Solutions</NavLink></NavDropdown.Item>

              </NavDropdown>

              
              <NavLink
                to="/contactUs"
                className={` ${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => {handleActiveNav(3); closeNav()}}
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
