import React , {Component} from 'react';
import {Button, Form, FormGroup, InputGroup, InputGroupAddon, Input, FormFeedback, FormText, Container, Row, Col} from 'reactstrap';
import './signup.css';
import {connect} from 'react-redux';
import Header from '../header/header';
import {bindActionCreators} from 'redux';
import {userSignupRequest} from "../../actions/user-signup";


class Signup extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isValid: false,
            fullname: '',
            username:'',
            password:''
        };
    }
    onChange(e){
      this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        // console.log(this.state);
        this.props.userSignupRequest(this.state);
    }
    render() {
        if(!this.props.lang){
            return (
                <div className="App">
                    <Header pageName='signup'/>
                    <div className="App-intro">
                        <div className="signup">
                            <header className="signup-header">
                                <h1 className="signup-title">Sign Up for free</h1>
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
                                                        placeholder='Full Name'
                                                        value = {this.state.fullname}
                                                        name='fullname'
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
                                                        placeholder='Email'
                                                        value = {this.state.username}
                                                        name='username'
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
                                                        name='password'
                                                        value = {this.state.password}
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
                                            <Button className='btn btn-success btn-block'>Create new account <span className="pull-right fa fa-arrow-right"></span></Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>

                        </div>
                    </div>
                </div>

            );
        }
        return (
            <div className="App">
                <Header pageName='signup'/>
                <div className="App-intro">
            <div className="signup">
                <header className="signup-header">
                    <h1 className="signup-title">{this.props.lang.page.signup.welcome}</h1>
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
                                            placeholder={this.props.lang.page.signup.placeholder_fullname}
                                            value = {this.state.fullname}
                                            name='fullname'
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
                                            placeholder={this.props.lang.page.signup.placeholder_username}
                                            value = {this.state.Username}
                                            name='username'
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
                                        <Input type='password'
                                               placeholder={this.props.lang.page.signup.placeholder_password}
                                               value = {this.state.password}
                                               name='password'
                                               onChange = {this.onChangePassword}
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
                                <Button className='btn btn-success btn-block'>{this.props.lang.page.signup.signup_button} <span className="pull-right fa fa-arrow-right"></span></Button>
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

//dispatch actions (don't hook it to the component)

function matchDispatchToProps(dispatch) {
    return bindActionCreators({userSignupRequest : userSignupRequest}, dispatch);
}
/**
 * this function take your store and pass it to your component as a property
 * */
function mapStateToProps(state) {
    return {
        user : state.signupUser
    }
}



export default connect(mapStateToProps,matchDispatchToProps)(Signup);