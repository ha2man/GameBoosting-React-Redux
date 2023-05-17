import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from "reactstrap";
import EventBus from "app/common/EventBus";

import { register, login, logout, setError } from "app/slices/auth";

function IndexNavbar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [modal_login, setLoginModal] = useState(false);
  const [modal_signup, setSignupModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.auth);
  const toggle_login = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setError('');
    setLoginModal(!modal_login);
  }
  const toggle_signup = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPassword2('');
    dispatch(setError(''));
    setSignupModal(!modal_signup);
  }
  
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

  useEffect(() => {
    if (error?.length === 0 && !isLoading && email && password) {
        window.location.reload();
    }
  }, [isLoading, error])

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setError(`Password is not Matched.`));
      return;
    }
    await dispatch(register({ name, email, discord:'', password }));
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
  }

  return (
    <div>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{backgroundColor:"#010518EE"}}>
        <Container fluid='xl' className="d-flex">
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              <img src="./images/logo.png" alt="logo" className="custom-logo"/>
              {/* <span className="ml-3">RelatedBoost</span> */}
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
            className="justify-content-start"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar className="justify-content-start">
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
                  {
                  currentUser.userType === 'user' ?
                    <NavLink
                      href="/your-order"
                      style={{position:'relative'}}
                    >
                      <p style={{cursor: 'pointer', color:'#D43E3E', fontWeight:'700', fontSize:'18px'}}>Your Orders</p>
                      <div style={{
                        position:'absolute',
                        top: '-4px',
                        right: '-10px',
                        border:'1px solid #D43E3E',
                        borderRadius:'4px',
                        fontSize:'11px',
                        fontWeight:'800',
                        lineHeight:'90%',
                        padding:'2px 7px',
                        color:'#D43E3E'
                      }}>New</div>
                    </NavLink>
                    :
                    <NavLink
                      href="/accept-order"
                      style={{position:'relative'}}
                    >
                      <p style={{cursor: 'pointer', color:'#D43E3E', fontWeight:'700', fontSize:'18px'}}>Available Orders</p>
                      <div style={{
                        position:'absolute',
                        top: '-4px',
                        right: '-10px',
                        border:'1px solid #D43E3E',
                        borderRadius:'4px',
                        fontSize:'11px',
                        fontWeight:'800',
                        lineHeight:'90%',
                        padding:'2px 7px',
                        color:'#D43E3E'
                      }}>New</div>
                    </NavLink>
                  }
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
                <NavLink
                  href="/contact"
                >
                  <p>Contact</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                { !currentUser ? 
                  <NavLink>
                    <p onClick={() => setLoginModal(!modal_login)} style={{cursor: 'pointer', border:'2px solid #D43E3E', borderRadius:'8px', padding:'8px 37px'}}>Login</p>
                  </NavLink>
                   :
                  <NavLink>
                    <p onClick={() => logOut()} style={{cursor: 'pointer', border:'2px solid #D43E3E', borderRadius:'8px', padding:'8px 37px'}}>Logout</p>
                  </NavLink>
                }
              </NavItem>
              <NavItem>
                <NavLink
                >
                  { !currentUser && <p onClick={() => setSignupModal(!modal_signup)} style={{cursor:'pointer', border:'2px solid #D43E3E', backgroundColor:'#D43E3E', borderRadius:'8px', padding:'8px 28px'}}>Sign Up</p> }
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal isOpen={modal_login} toggle={toggle_login} size="md" centered>
        <ModalHeader toggle={toggle_login} style={{backgroundColor:"#010518", justifyContent:'center', padding:"2rem", fontFamily:'odibeeSansFont', textAlign:'center', fontSize:'49px', fontWeight:'400'}}>
          Login
        </ModalHeader>
        <ModalBody style={{padding:"0 40px", backgroundColor:"#010518"}}>
          { isLoading ? <div style={{margin:"30px 0", alignItems:'center', textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} children={false} /></div> :
          <form action="" method="" onSubmit={handleLogin}>
            <p className="text-danger" style={{textAlign:'center'}}>{error.length>0&&error}</p>
            <div style={{marginBottom:'24px'}}>
              <div style={{
                  display:'flex', backgroundColor: '#150D24',
                  border: '1px solid #F1AC5C',
                  borderRadius: '8px',
                  alignItems: 'center',
                  padding: '16px',
              }}>
                  <img src={require('../../assets/img/email.png')} alt="avatar" width={28} height={28} />
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
              </div>
            </div>
            <div>
                <div style={{
                    display:'flex', backgroundColor: '#150D24',
                    border: '1px solid #F1AC5C',
                    borderRadius: '8px',
                    alignItems: 'center',
                    padding: '16px',
                }}>
                    <img src={require('../../assets/img/password.png')} alt="avatar" width={28} height={28} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
            </div>
            <button type='submit' className="btn-orange" style={{width:'100%', marginTop:'40px'}}>Login</button>
            <div style={{fontSize:'16px', fontWeight:'300', margin:'48px 0', textAlign:'center'}}>
              <span>Do not Have An Account? </span>
              <span onClick={() => {toggle_login();toggle_signup()}} style={{color:'#D43E3E', fontWeight:'700', cursor:'pointer'}}>Sign Up</span>
            </div>
          </form>
          }
        </ModalBody>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={modal_signup} toggle={toggle_signup} size="md" centered>
        <ModalHeader toggle={toggle_signup} style={{backgroundColor:"#010518", justifyContent:'center', padding:"2rem", fontFamily:'odibeeSansFont', textAlign:'center', fontSize:'49px', fontWeight:'400'}}>
          Sign Up
        </ModalHeader>
        <ModalBody style={{padding:"0 40px", backgroundColor:"#010518"}}>
        { isLoading ? <div style={{margin:"30px 0", alignItems:'center', textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} children={false} /></div> :
          <form action="" method="" onSubmit={handleSignUp}>
            <p className="text-danger" style={{textAlign:'center'}}>{error.length>0&&error}</p>
            <div style={{marginBottom:'24px'}}>
              <div style={{
                  display:'flex', backgroundColor: '#150D24',
                  border: '1px solid #F1AC5C',
                  borderRadius: '8px',
                  alignItems: 'center',
                  padding: '16px',
              }}>
                  <img src={require('../../assets/img/avatar.png')} alt="avatar" width={28} height={28} />
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" required/>
              </div>
            </div>
            <div style={{marginBottom:'24px'}}>
              <div style={{
                  display:'flex', backgroundColor: '#150D24',
                  border: '1px solid #F1AC5C',
                  borderRadius: '8px',
                  alignItems: 'center',
                  padding: '16px',
              }}>
                  <img src={require('../../assets/img/email.png')} alt="email" width={28} height={28} />
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
              </div>
            </div>
            <div style={{marginBottom:'24px'}}>
                <div style={{
                    display:'flex', backgroundColor: '#150D24',
                    border: '1px solid #F1AC5C',
                    borderRadius: '8px',
                    alignItems: 'center',
                    padding: '16px',
                }}>
                    <img src={require('../../assets/img/password.png')} alt="avatar" width={28} height={28} />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>
            </div>
            <div>
                <div style={{
                    display:'flex', backgroundColor: '#150D24',
                    border: '1px solid #F1AC5C',
                    borderRadius: '8px',
                    alignItems: 'center',
                    padding: '16px',
                }}>
                    <img src={require('../../assets/img/password.png')} alt="avatar" width={28} height={28} />
                    <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password" required />
                </div>
            </div>
            <button type='submit' className="btn-orange" style={{width:'100%', marginTop:'40px'}}>Sign Up</button>
            <div style={{fontSize:'16px', fontWeight:'300', margin:'48px 0', textAlign:'center'}}>
              <span>already have an account? </span>
              <span onClick={() => {toggle_login();toggle_signup()}} style={{color:'#D43E3E', fontWeight:'700', cursor:'pointer'}}>Login</span>
            </div>
          </form>
        }
        </ModalBody>
      </Modal>
    </div>
  );
}

export default IndexNavbar;
