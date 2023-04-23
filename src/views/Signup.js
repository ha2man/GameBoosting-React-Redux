import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
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

import { register, setError } from "app/slices/auth";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [discord, setDiscord] = useState("");
    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [disFocus, setDisFocus] = useState(false);
    const [ready, setReady] = useState(false);
    const { isLoading } = useSelector((state) => state.auth);
    const { error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (error?.length === 0 && !isLoading && name && email && password) {
            navigate("/login");
        }
    }, [isLoading, error])
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (discord) {
            if (!discord.match(/([\w.%+-]+)#([0-9]{4})/g)) {
                dispatch(setError("Invalid Discord Type!!!"));
                setDisFocus(true);
                return;
            }
        }
        dispatch(register({ name, email, discord, password }))
    }
    return (
        <div className="section section-login">
            { isLoading ? <div style={{marginTop:"calc(30vh)", textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} children={false} /></div> :
            <Container fluid="xl">
                <Row>
                    <Col>
                        <div className="login-form">
                        <Card className="card-signup" data-background-color="black">
                            <Form action="" className="form" method="" onSubmit={handleSubmit}>
                                <CardHeader className="text-center">
                                <CardTitle className="title-up" tag="h3">
                                    Sign Up
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
                                    "no-border" + (nameFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <div className="input-group-append">
                                    <InputGroupText>
                                        <i className="now-ui-icons users_circle-08"></i>
                                    </InputGroupText>
                                    </div>
                                    <Input
                                    placeholder="Your Name..."
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => setNameFocus(true)}
                                    onBlur={() => setNameFocus(false)}
                                    minLength={6}
                                    required
                                    ></Input>
                                </InputGroup>
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
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    minLength={6}
                                    required
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                    "no-border" + (disFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <div className="input-group-append">
                                    <InputGroupText>
                                        <i className="now-ui-icons tech_controller-modern"></i>
                                    </InputGroupText>
                                    </div>
                                    <Input
                                    placeholder="Discord ID..."
                                    type="text"
                                    value={discord}
                                    onChange={(e) => setDiscord(e.target.value)}
                                    onFocus={() => setDisFocus(true)}
                                    onBlur={() => setDisFocus(false)}
                                    minLength={6}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setPassFocus(true)}
                                    onBlur={() => setPassFocus(false)}
                                    minLength={8}
                                    required
                                    ></Input>
                                </InputGroup>
                                <div className="d-flex justify-content-center mt-3">
                                    <input type="checkbox" checked={ready} onClick={() => setReady(!ready)} style={{width:"16px", height:"16px"}} />
                                    <span style={{color:"#cccccc", marginLeft:"0.3rem",fontSize:"15px",lineHeight:"1.0rem"}}>
                                        I agree with the terms of use. To check it {" "}
                                        <a style={{color:"#f96332"}} href="/terms">See here</a>
                                    </span>
                                </div>
                                </CardBody>
                                <CardFooter className="text-center pt-0">
                                    <button disabled={!ready} type="submit" className="my-btn-black">Sign Up</button>
                                </CardFooter>
                            </Form>
                        </Card>
                        <div className="sign-up-link">
                            <span>Already got one? Go to </span>  <a href="/login">Login</a>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            }
        </div>
    )
}

export default SignUp;