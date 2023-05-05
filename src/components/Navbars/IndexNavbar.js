import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "app/slices/auth";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import EventBus from "app/common/EventBus";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{backgroundColor:"rgba(30,30,30,0.95)"}}>
        <Container fluid="xl" className="d-flex">
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              <img src="./images/logo.png" alt="logo" className="custom-logo"/>
              <span className="ml-3">RelatedBoost</span>
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Tomas Jinn. Coded by Tomas Jinn
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/"
                >
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/rocket-league-boosting"
                >
                  <p>Rocket League</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/league-legend-boosting"
                >
                  <p>League of Legends</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/order"
                >
                  <p>Orders</p>
                </NavLink>
              </NavItem>
              { currentUser && 
                <NavItem>
                  <NavLink
                    href="/your-order"
                  >
                    <p>Your Orders</p>
                  </NavLink>
                </NavItem>
              }
             <NavItem>
                <NavLink
                  href="/terms"
                >
                  <p>Terms</p>
                </NavLink>
              </NavItem>
              <NavItem>
                { !currentUser ? 
                  <NavLink
                    href="/login"
                  >
                    <p>Login</p>
                  </NavLink> :
                  <NavLink
                    onClick={logOut}
                  >
                    <p>Logout</p>
                  </NavLink>
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
