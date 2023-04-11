import React, { useState, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Spinner,
    Alert
} from "reactstrap";

import { login } from "app/slices/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    const { isLoading } = useSelector((state) => state.auth);
    const { error } = useSelector((state) => state.auth);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error?.length===0 && isLoggedIn && !isLoading) {
            navigate("/rocket-league-boosting");
            window.location.reload();
        }
    }, [isLoading, error])

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }

    if (isLoggedIn && !isLoading) {
        //return <Navigate to="/rocket-league-boosting" />;
    }

    return (
        <div className="section section-login">
         {
            isLoading ?  <div style={{marginTop:"calc(30vh)", textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} children={false} /></div>:
            <Container fluid="xl">
                <Row>
                    <Col>
                        <div className="login-form">
                        <Card className="card-signup" data-background-color="black">
                            <Form action="" className="form" method="" onSubmit={handleLogin}>
                                <CardHeader className="text-center">
                                <CardTitle className="title-up" tag="h3">
                                    Login
                                </CardTitle>
                                <div className="social-line">
                                    <Button
                                    className="btn-neutral btn-icon btn-round"
                                    color="facebook"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    <i className="fab fa-facebook-square"></i>
                                    </Button>
                                    <Button
                                    className="btn-neutral btn-icon btn-round"
                                    color="twitter"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    size="lg"
                                    >
                                    <i className="fab fa-twitter"></i>
                                    </Button>
                                    <Button
                                    className="btn-neutral btn-icon btn-round"
                                    color="google"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    >
                                    <i className="fab fa-google-plus"></i>
                                    </Button>
                                </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-danger">{error}</p>
                                <InputGroup
                                    className={
                                    "no-border" + (emailFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="now-ui-icons ui-1_email-85"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                    placeholder="Email..."
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    required
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                    "no-border" + (passFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="now-ui-icons text_caps-small"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                    placeholder="Password..."
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setPassFocus(true)}
                                    onBlur={() => setPassFocus(false)}
                                    required
                                    ></Input>
                                </InputGroup>
                                </CardBody>
                                <CardFooter className="text-center">
                                    <button type="submit" className="my-btn-black">Login</button>
                                </CardFooter>
                                {message && (
                                    <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                    </div>
                                )}
                            </Form>
                        </Card>
                        <div className="sign-up-link">
                            <a href="/signup">Sign Up</a>
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="description">
                            <h2>How to get login data?</h2>
                            <p>
                                The Login feature is only available if you have purchased a boost / account on our website. The credentials you have put in at the checkout are valid to login. After you log in you will be redirected to your dashboard where you will see your account details or boosting details. We are constantly working to improve the dashboard.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            }
        </div>
    )
}

export default Login;