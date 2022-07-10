import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AppNavbar from "./AppNavBar";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/clients">Clients</Link></Button>
                    <Button color="link"><Link to="/local">Registration</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;