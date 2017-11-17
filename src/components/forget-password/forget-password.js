import React , {Component} from 'react';
import {Button, Form, FormGroup, InputGroup, InputGroupAddon, Input, FormFeedback, FormText, Container, Row, Col} from 'reactstrap';
import './forget-password.css';
import Header from '../header/header';

class ForgetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValid: false
        };
    }
    render() {
        return (
            <div className="App">
                <Header pageName='forget-password'/>
                <div className="App-intro">
                    <div className="signup">
                        <header className="signup-header">
                            <h1 className="signup-title">Forget Password?</h1>
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
                                        <Button className='btn btn-success btn-block'>Reset Password <span className="pull-right fa fa-arrow-right"></span></Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>

                    </div>
                </div>
            </div>

        );
    }
}

export default ForgetPassword;