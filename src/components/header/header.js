import React , {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,
         Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '../../assets/logo.png';
import './header.css';

 class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
     toggleDropDown() {
         this.setState({
             dropdownOpen: !this.state.dropdownOpen
         });
     }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} alt="Planradar"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="" >Signup for free</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                    <DropdownToggle
                                        className='btn btn-link lang'
                                        caret>
                                        Languages
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Deutsch</DropdownItem>
                                        <DropdownItem>English</DropdownItem>
                                        <DropdownItem>Español</DropdownItem>
                                        <DropdownItem>Français</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}



export default Header;