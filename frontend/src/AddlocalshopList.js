import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from "./AppNavBar";

class AddlocalshopList extends Component {

    constructor(props) {
        super(props);
        this.state = {addlocalshop: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/local')
            .then(response => response.json())
            .then(data => this.setState({addlocalshop: data}));
    }

    async remove(id) {
        await fetch(`/local/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.addlocalshop].filter(i => i.id !== id);
            this.setState({addlocalshop: updatedUsers});
        });
    }

    render() {
        const {addlocalshop} = this.state;

        const addlocalshopList = addlocalshop.map(addlocalshop => {
            return <tr key={addlocalshop.id}>
                <td style={{whiteSpace: 'nowrap'}}>{addlocalshop.ShopName}</td>
                <td>{addlocalshop.address}</td>
                <td>{addlocalshop.state}</td>
                <td>{addlocalshop.district}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/local/" + addlocalshop.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(addlocalshop.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>

                    <div className="float-right mb-1">
                        <Button color="success" tag={Link} to="/local/new">Add local shop</Button>
                    </div>

                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="10%">Shop Name</th>
                            <th width="10%">Shop Address</th>
                            <th width="10%">State</th>
                            <th width="10%">District</th>

                        
                        </tr>
                        </thead>
                        <tbody>
                        {addlocalshopList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default AddlocalshopList;