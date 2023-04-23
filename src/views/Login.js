import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Spinner,
} from "reactstrap";

import { login } from "app/slices/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.auth);
    const { error } = useSelector((state) => state.auth);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error?.length===0 && isLoggedIn && !isLoading) {
            navigate("/rocket-league-boosting");
            window.location.reload();
        }
    }, [isLoading, error, isLoggedIn, navigate])

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }

    // if (isLoggedIn && !isLoading) {
    //     //return <Navigate to="/rocket-league-boosting" />;
    // }

    return (
        <div className="section section-login">
         {
            isLoading ?  <div style={{marginTop:"calc(30vh)", textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} /></div>:
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
                                {/* <div className="social-line">
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
                                </div> */}
                                </CardHeader>
                                <CardBody>
                                    <p className="text-danger">{error}</p>
                                <InputGroup
                                    className={
                                    "no-border" + (emailFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <div className="input-group-append">
                                    <InputGroupText>
                                        <i className="now-ui-icons ui-1_email-85"></i>
                                    </InputGroupText>
                                    </div>
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
                                    <div className="input-group-append">
                                    <InputGroupText>
                                        <i className="now-ui-icons text_caps-small"></i>
                                    </InputGroupText>
                                    </div>
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
                            <p style={{textAlign: "justify"}}>
                            Thank you for considering our boost/account purchase on our website. To enjoy the convenience of our Login feature, please note that it is exclusively available to those who have purchased a boost or an account from us.
                            <br />
                            Once you have completed a purchase you will be allowed to register in our web site. Upon successful registering, you will be redirected to your personalized dashboard, where you can view your account details or boosting progress.
                            <br />
                            As part of our commitment to providing the best experience for our customers, we are constantly working to improve our dashboard, ensuring that you have access to the most up-to-date and accurate information. We appreciate your support and look forward to serving you on our platform.
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