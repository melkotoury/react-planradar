import React , {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
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
        switch (page){
            case 'login':
                return(
                    <NavItem>
                      <Link to='/signup' className='nav-link'>
                          Signup
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
                            {this.displayLinks(this.props.page)}

                            <Language/>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}



export default Header;