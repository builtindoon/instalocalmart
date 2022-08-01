import React, { Component } from 'react';
import { BrowserRouter , Route, Switch,Link, withRouter } from 'react-router-dom';

import { Button, Container, Form, FormGroup, Input, Label, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import AppNavbar from "./AppNavBar";

class Registration extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        address:'',
        city:'',
        state:'',
        pinCode:'',
        password:'',
        puser:''
    };
    
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            dropDownOpen: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const localUser = await (await fetch(`/local/${this.props.match.params.id}`)).json();
            this.setState({item: localUser});
        }
    }
	
	toggle = () => {
	    this.setState({
	       dropDownOpen: !this.state.dropDownOpen,
	    })
	}
	
	handleChange2 = (code) => {
		let item = {...this.state.item};
		item.puser= code;
	    this.setState({item})
	}
	
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/local' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/local');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit User' : 'Add User'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="mb-1">
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                               onChange={this.handleChange} autoComplete="firstName"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                               onChange={this.handleChange} autoComplete="lastName"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" value={item.address || ''}
                               onChange={this.handleChange} autoComplete="address"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={item.city || ''}
                               onChange={this.handleChange} autoComplete="city"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="state">State</Label>
                        <Input type="text" name="state" id="state" value={item.state || ''}
                               onChange={this.handleChange} autoComplete="state"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="pinCode">Pincode</Label>
                        <Input type="text" name="pinCode" id="pinCode" value={item.pinCode || ''}
                               onChange={this.handleChange} autoComplete="pinCode"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="email">Password</Label>
                        <Input type="text" name="password" id="email" value={item.password || ''}
                               onChange={this.handleChange} autoComplete="password"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="email">Confirm Password</Label>
                        <Input type="text" name="password2" id="email" value={item.password2 || ''}
                               onChange={this.handleChange} autoComplete="password2"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                    	<ButtonDropdown >
				        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
				            <DropdownToggle color="primary" caret className="dropdown-toggle">
				                Select User type
				            </DropdownToggle>
				            <DropdownMenu className="currency-dropdown">
				                    <DropdownItem onClick={() => this.handleChange2("End User(EU)")} dropDownValue="End User(EU)">End User(EU)</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("BU")} dropDownValue="BU">BU</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("Admin(CC)")} dropDownValue="Admin(CC)">Admin(CC)</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("Store Admin(SA)")} dropDownValue="Store Admin(SA)">Store Admin(SA)</DropdownItem>
				                </DropdownMenu>
				            </Dropdown>
				        </ButtonDropdown>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/local">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(Registration);