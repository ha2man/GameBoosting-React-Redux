import React from "react";
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
    Row
} from "reactstrap";

function ContactUs() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [msgFocus, setMsgFocus] = React.useState(false);
    return (
        <div className="section section-contact">
            <div className="container">
                <div className="custom-contact">
                    <Card className="card-signup" data-background-color="black">
                        <Form action="" className="form" method="">
                            <CardHeader className="text-center">
                            <CardTitle className="title-up" tag="h3">
                                Contact Us
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
                            <InputGroup
                                className={
                                "no-border" + (firstFocus ? " input-group-focus" : "")
                                }
                            >
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="now-ui-icons users_circle-08"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Your Name..."
                                type="text"
                                onFocus={() => setFirstFocus(true)}
                                onBlur={() => setFirstFocus(false)}
                                required
                                ></Input>
                            </InputGroup>
                            <InputGroup
                                className={
                                "no-border" + (lastFocus ? " input-group-focus" : "")
                                }
                            >
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="now-ui-icons tech_controller-modern"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Discord..."
                                type="text"
                                onFocus={() => setLastFocus(true)}
                                onBlur={() => setLastFocus(false)}
                                ></Input>
                            </InputGroup>
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
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                required
                                ></Input>
                            </InputGroup>
                            <InputGroup
                                className={
                                "no-border" + (msgFocus ? " input-group-focus" : "")
                                }
                            >
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Message..."
                                type="textarea"
                                rows="10"
                                onFocus={() => setMsgFocus(true)}
                                onBlur={() => setMsgFocus(false)}
                                required
                                ></Input>
                            </InputGroup>
                            </CardBody>
                            <CardFooter className="text-center">
                                <button className="my-btn-black">Send Message</button>
                            </CardFooter>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;