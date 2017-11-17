import React , {Component} from 'react';
import {Button, Form, FormGroup, InputGroup, InputGroupAddon, Input, FormFeedback, FormText, Container, Row, Col} from 'reactstrap';
import './login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../header/header';


class Login extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            isValid: false,
            email: '',
            password:''
        };
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        if(!this.props.lang){
            return (
                <div className="App">
                    <Header pageName='login'/>
                    <div className="App-intro">
                        <div className="login">
                            <header className="login-header">
                                <h1 className="login-title">Welcome back!</h1>
                            </header>
                            <Form onSubmit={this.onSubmit}>
                                <Container>
                                    <Row>
                                        <Col
                                            xs={{size: 12}}
                                            sm={{size: 6, offset: 3}}
                                            lg={{size: 4, offset: 4}}
                                        >
                                            <FormGroup>
                                                <InputGroup size="lg">
                                                    <Input
                                                        placeholder='Username (Your Email)'
                                                        value = {this.state.email}
                                                        name='email'
                                                        onChange = {this.onChange}
                                                        />
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
                                                    <Input
                                                        type='password'
                                                        placeholder='Choose Your Password'
                                                        value = {this.state.password}
                                                        name='password'
                                                        onChange = {this.onChange}
                                                    />
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
        return (
            <div className="App">
                <Header page='login'/>
                <div className="App-intro">
            <div className="login">
                <header className="login-header">
                    <h1 className="login-title">{this.props.lang.page.login.welcome}</h1>
                </header>
                <Form onSubmit={this.onSubmit}>
                    <Container>
                        <Row>
                            <Col
                                xs={{size: 12}}
                                sm={{size: 6, offset: 3}}
                                lg={{size: 4, offset: 4}}
                            >
                                <FormGroup>
                                    <InputGroup size="lg">
                                        <Input
                                            placeholder={this.props.lang.page.login.placeholder_email}
                                            value = {this.state.email}
                                            name='email'
                                            onChange = {this.onChange}
                                        />
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
                                        <Input
                                            type='password'
                                            placeholder={this.props.lang.page.login.placeholder_password}
                                            value = {this.state.password}
                                            name='password'
                                            onChange = {this.onChange}
                                        />
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
                                <Button className='btn btn-success btn-block'>{this.props.lang.page.login.login_button} <span className="pull-right fa fa-arrow-right"></span></Button>
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
                            <Link to='/forget-password' className="btn btn-link white">{this.props.lang.page.login.forget_password}</Link>
                        </Col>
                        <Col
                            xs={{size: 12}}
                            sm={{size: 6, offset: 3}}
                            lg={{size: 4, offset: 4}}
                        >
                            <Link to='/signup' className="btn btn-success btn-block">{this.props.lang.page.login.signup_button} <span className="pull-right fa fa-arrow-right"></span></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
                </div>
            </div>

        );
    }
}

/**
 * this function take your store and pass it to your component as a property
 * */
function mapStateToProps(state) {
    return {
        lang : state.activeLang
    }
}

export default connect(mapStateToProps)(Login);