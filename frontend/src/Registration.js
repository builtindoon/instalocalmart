import React, { Component } from 'react';
import { BrowserRouter , Route, Switch,Link, withRouter } from 'react-router-dom';

import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from "./AppNavBar";

class Registration extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        address:'',
        city:'',
        state:'',
        pinCode:''

    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
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
                        <Input type="text" name="firstname" id="firstname" value={item.firstName || ''}
                               onChange={this.handleChange} autoComplete="firstname"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="firstname" id="lastname" value={item.lastName || ''}
                               onChange={this.handleChange} autoComplete="lastname"/>
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
                        <Input type="number" name="pinCode" id="pinCode" value={item.pinCode || ''}
                               onChange={this.handleChange} autoComplete="pinCode"/>
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
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