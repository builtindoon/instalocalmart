import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from "./AppNavBar";

class AdddriverList extends Component {

    constructor(props) {
        super(props);
        this.state = {adddriver: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/clients')
            .then(response => response.json())
            .then(data => this.setState({adddriver: data}));
    }

    async remove(id) {
        await fetch(`/adddriver/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updateAdddriver = [...this.state.adddriver].filter(i => i.id !== id);
            this.setState({adddriver: updateAdddriver});
        });
    }

    render() {
        const {adddriver} = this.state;

        const adddriverList = adddriver.map(adddriver => {
            return <tr key={adddriver.id}>
                <td style={{whiteSpace: 'nowrap'}}>{adddriver.name}</td>
                <td>{adddriver.email}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/adddriver/" + adddriver.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(adddriver.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/adddriver/new">Add vehicles</Button>
                    </div>
                    <h3>Class of Vehicles</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Vehicle Class</th>
                            <th width="30%">LMV</th>
                            <th width="40%">MCWG</th>
                        </tr>
                      
                        <th width="30%">Issue Date</th>
                        <th width="30%">LMV</th>
                        <th width="40%">MCWG</th>
                        </thead>
                        <tbody>
                        {adddriverList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default AdddriverList;