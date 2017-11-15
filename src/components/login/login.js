import React , {Component} from 'react';
import {Button, Form, FormGroup, InputGroup, InputGroupAddon, Input, FormFeedback, FormText, Container, Row, Col} from 'reactstrap';
import './login.css';
import {Link} from 'react-router-dom';
import Header from '../header/header';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValid: false
        };
    }
    render() {
        return (
            <div className="App">
                <Header page='login'/>
                <div className="App-intro">
            <div className="login">
                <header className="login-header">
                    <h1 className="login-title">Welcome back!</h1>
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
                                <Button className='btn btn-success btn-block'>Login <span className="pull-right fa fa-arrow-right"></span></Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
                <Container>
                    <Row>
                        <Col
                            xs={{size: 12}}
                            sm={{size: 6, offset: 3}}
                            lg={{size: 4, offset: 4}}
                        >
                            <hr />
                        </Col>
                        <Col
                            xs={{size: 12}}
                            sm={{size: 6, offset: 3}}
                            lg={{size: 4, offset: 4}}
                        >
                            <Link to='/forget-password' className="btn btn-link white">Forget Password ?</Link>
                        </Col>
                        <Col
                            xs={{size: 12}}
                            sm={{size: 6, offset: 3}}
                            lg={{size: 4, offset: 4}}
                        >
                            <Link to='/signup' className="btn btn-success btn-block">Signup for free <span className="pull-right fa fa-arrow-right"></span></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
                </div>
            </div>

        );
    }
}

export default Login;