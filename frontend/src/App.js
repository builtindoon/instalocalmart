import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientList from './ClientList';
import ClientEdit from "./ClientEdit";
import Registration from "./Registration";
import RegistrationList from "./RegistrationList";
import Login from "./Login";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/clients' exact={true} component={ClientList}/>
                    <Route path='/clients/:id' component={ClientEdit}/>
                    <Route path='/local' exact={true} component={RegistrationList}/>
                    <Route path='/local/:id' component={Registration}/>
                    <Route path='/login' exact={true} component={Login}/>
                </Switch>
            </Router>
        )
    }
}

export default App;