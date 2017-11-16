import React,{Component} from 'react';
import {bindActionCreators} from 'react-redux';
import {connect} from 'react-redux';
import {NavItem,Dropdown,DropdownToggle,DropdownItem, DropdownMenu} from 'reactstrap';


class Language extends Component{


    constructor(props){
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    renderLanguages() {
        return this.props.lang.map((lang) => {
            return (
                <DropdownItem key={lang.id}>{lang.lang}</DropdownItem>
            );
        });

    }
    render(){
        return (
            <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle
                        className='btn btn-link lang'
                        caret>
                        Languages
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.renderLanguages()}
                    </DropdownMenu>
                </Dropdown>
            </NavItem>

        );
    }


}

/**
 * this function take your store and pass it to your component as a property
 * */
function mapStateToProps(state) {
    return {
        lang : state.lang
    }
}

export default connect(mapStateToProps)(Language);