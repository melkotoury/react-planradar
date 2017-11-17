import React , {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Language from '../../containers/lang'

import './header.css';

 class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

     displayLinks(page){

        if(!this.props.lang){
            switch (page){
                case 'login':
                    return(
                        <NavItem>
                            <Link to='/signup' className='nav-link'>
                                Signup for free
                            </Link>
                        </NavItem>
                    );
                case 'signup':
                    return(
                        <NavItem>
                            <Link to='/' className='nav-link'>
                                Login
                            </Link>
                        </NavItem>
                    );
                case 'not-found' :
                    return(
                        <div className='inherit-div'>
                            <NavItem>
                                <Link to='/' className='nav-link'>
                                    Login
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/signup' className='nav-link'>
                                    Signup for free
                                </Link>
                            </NavItem>
                        </div>
                    );
                case 'forget-password' :
                    return(
                        <div className='inherit-div'>
                            <NavItem>
                                <Link to='/' className='nav-link'>
                                    Login
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/signup' className='nav-link'>
                                    Signup for free
                                </Link>
                            </NavItem>
                        </div>
                    );
                default:
                    return(
                        <NavItem>
                            <Link to='/signup' className='nav-link'>
                                Signup
                            </Link>
                        </NavItem>
                    );
            }
        }
        switch (page){
            case 'login':
                return(
                    <NavItem>
                      <Link to='/signup' className='nav-link'>
                          {this.props.lang.page.menu.signup}
                      </Link>
                    </NavItem>
                );
            case 'signup':
                return(
                    <NavItem>
                      <Link to='/' className='nav-link'>
                          {this.props.lang.page.menu.login}
                      </Link>
                    </NavItem>
                );
            case 'not-found' :
            return(
                <div className='inherit-div'>
                    <NavItem>
                        <Link to='/' className='nav-link'>
                            {this.props.lang.page.menu.login}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/signup' className='nav-link'>
                            {this.props.lang.page.menu.signup}
                        </Link>
                    </NavItem>
                </div>
            );
            case 'forget-password' :
                return(
                    <div className='inherit-div'>
                        <NavItem>
                            <Link to='/' className='nav-link'>
                                {this.props.lang.page.menu.login}
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/signup' className='nav-link'>
                                {this.props.lang.page.menu.signup}
                            </Link>
                        </NavItem>
                    </div>
                );
            default:
                return(
                    <NavItem>
                        <Link to='/signup' className='nav-link'>
                            {this.props.lang.page.menu.signup}
                        </Link>
                    </NavItem>
                );
        }

     }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                        <Link className='navbar-brand' to="/">
                            <img src={logo} alt="Planradar"/>
                        </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.displayLinks(this.props.pageName)}

                            <Language/>
                        </Nav>
                    </Collapse>
                </Navbar>
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

export default connect(mapStateToProps)(Header);