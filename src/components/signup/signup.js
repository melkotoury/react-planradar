import React , {Component} from 'react';
import {Button, Form, FormGroup, InputGroup, InputGroupAddon, Input, FormFeedback, FormText, Container, Row, Col} from 'reactstrap';
import './signup.css';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValid: false
        };
    }
    render() {
        return (
            <div className="signup">
                <header className="signup-header">
                    <h1 className="signup-title">Sign Up for free</h1>
                </header>
                <Form>
                    <Container>
                        <Row>
                            <Col
                                xs={{size: 12}}
                                sm={{size: 6, offset: 3}}
                                lg={{size: 4, offset: 4}}
                            >
                                <FormGroup>
                                    <InputGroup size="lg">
                                        <Input  placeholder='Username (Your Email)'/>
                                        <InputGroupAddon><span className="fa fa-user"></span></InputGroupAddon>
                                    </InputGroup>
                                    <FormFeedback></FormFeedback>
                                    <FormText></FormText>
                                </FormGroup>
                            </Col>
                            <Col
                                xs={{size: 12}}
                                sm={{size: 6, offset: 3}}
                                lg={{size: 4, offset: 4}}
                            >
                                <FormGroup>
                                    <InputGroup size="lg">
                                        <Input  placeholder='Choose Your Password'/>
                                        <InputGroupAddon><span className="fa fa-lock"></span></InputGroupAddon>
                                    </InputGroup>
                                    <FormFeedback></FormFeedback>
                                    <FormText></FormText>
                                </FormGroup>
                            </Col>
                            <Col
                                xs={{size: 12}}
                                sm={{size: 6, offset: 3}}
                                lg={{size: 4, offset: 4}}
                            >
                                <Button className='btn btn-success btn-block'>Create new account <span className="pull-right fa fa-arrow-right"></span></Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>

            </div>

        );
    }
}

export default Signup;