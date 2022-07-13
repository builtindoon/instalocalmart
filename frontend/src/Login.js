import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from "./AppNavBar";

class Login extends Component {
    emptyItem = {
        email: '',
        password: ''
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
        if (this.props.match.params.email !== 'new') {
            const userDetail = await (await fetch(`/local/${this.props.match.params.email,this.props.match.params.password}`)).json();
            this.setState({item: userDetail});
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

        await fetch('/local' + (item.email ? '/' + item.email : item.password ? '/' + item.password : ''), {
            method: (item.email,item.password) ? 'PUT' : 'POST',
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
        const title = <h2>{item.id ? 'Edit Client' : 'Login'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email:
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/></Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Password:
                        <Input type="password" name="password" id="passwrod" value={item.password || ''}
                               onChange={this.handleChange} autoComplete="password"/></Label>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Login</Button>{' '}
                        <Button color="secondary" tag={Link} to="/local">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(Login);