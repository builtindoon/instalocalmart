import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md"   >
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand class="collapse navbar-collapse" tag={Link} to="/">SignUp</NavbarBrand>
            <NavbarBrand class="collapse navbar-collapse" tag={Link} to="/">Addlocalshop</NavbarBrand>
            <NavbarBrand class="collapse navbar-collapse" tag={Link} to="/">Adddriver</NavbarBrand>
             <NavbarBrand class="collapse navbar-collapse" tag={Link} to="/">AdddriverList</NavbarBrand>
        </Navbar>;
    }
}