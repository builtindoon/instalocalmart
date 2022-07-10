import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from "./AppNavBar";

class RegistrationList extends Component {

    constructor(props) {
        super(props);
        this.state = {registration: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/local')
            .then(response => response.json())
            .then(data => this.setState({registration: data}));
    }

    async remove(id) {
        await fetch(`/local/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.registration].filter(i => i.id !== id);
            this.setState({registration: updatedUsers});
        });
    }

    render() {
        const {registration} = this.state;

        const registrationList = registration.map(registration => {
            return <tr key={registration.id}>
                <td style={{whiteSpace: 'nowrap'}}>{registration.firstName}</td>
                <td>{registration.lastName}</td>
                <td>{registration.address}</td>
                <td>{registration.city}</td>
                <td>{registration.state}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/local/" + registration.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(registration.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/local/new">Add User</Button>
                    </div>
                    <h3>Users</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="10%">First Name</th>
                            <th width="10%">Last Name</th>
                            <th width="10%">Address</th>
                            <th width="10%">City</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {registrationList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default RegistrationList;