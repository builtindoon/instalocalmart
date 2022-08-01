import React, { Component } from 'react';
import { BrowserRouter , Route, Switch,Link, withRouter } from 'react-router-dom';

import { Button, Container, Form, FormGroup, Input, Label ,ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown,Col } from 'reactstrap';
import AppNavbar from "./AppNavBar";
import Select from 'react-select';
 


class Registration extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        address:'',
        city:'',
        state:'',
        pinCode:'',
        password:'',
        password2:'',
      	puser:'EU'
    };
  

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            passwordError: '',
            confirmPasswordError:'',
            DropDownOpen:'',
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
	handleChange2(code){
		let item = {...this.state.item};
        item.puser = code;
        this.setState({item});
	}
    handleChange(evnt) {
        const target = evnt.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
        const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
        if(passwordInputFieldName==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
    let errMsg ="";
    if(passwordLength===0){
            errMsg="Password is empty";
    }else if(!uppercasePassword){
            errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
            errMsg="At least one Lowercase";
    }else if(!digitsPassword){
            errMsg="At least one digit";
    }else if(!specialCharPassword){
            errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
            errMsg="At least minumum 8 characters";
    }else{
        errMsg="";
    }
    //setPasswordErr(errMsg);
    this.setState({passwordError: errMsg});
    }
    // for confirm password
    if(passwordInputFieldName=== "password2" || (passwordInputFieldName==="password" && this.state.item['password2'].lengthh>0) ){
            
        if(this.state.item.password.slice(0, this.state.item.password.length-1)!==this.state.item.password2)
        {
        //setConfirmPasswordError("Confirm password is not matched");
        this.setState({confirmPasswordError: "Confirm password is not matched"});
        }else{
        //setConfirmPasswordError("");
        this.setState({confirmPasswordError: ""});
        }
        
    }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch(('/local'), {
            method: 'POST',
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
                
                  <Col sm={2}>
                
                 <Label> User type:</Label>
                 </Col>
                 <Col sm={10}>
                    	<ButtonDropdown>
				        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
				            <DropdownToggle color="primary" caret className="dropdown-toggle" style={{width: "500px", marginBottom: "30px", backgroundColor: "#fff", color: "#000"}}>
				                {this.state.item.puser!==''?this.state.item.puser:"End User(EU)"}
				            </DropdownToggle>                            
				            <DropdownMenu className="currency-dropdown">
				                    <DropdownItem onClick={() => this.handleChange2("BU")} dropDownValue="BU">BU</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("CC")} dropDownValue="CC">Admin(CC)</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("SA")} dropDownValue="SA">Store Admin(SA)</DropdownItem>
				                </DropdownMenu>
				            </Dropdown>
				        </ButtonDropdown>
				        </Col>
                 
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
                        <Input type="password" name="password" id="email" value={item.password|| ''}
                               onChange={this.handleChange} autoComplete="password"/>
                               <p style={{color: "red"}}>{this.state.passwordError}</p>
                    </FormGroup>
                     <FormGroup className="mb-1">
                        <Label for="email">ConfirmPassword</Label>
                        <Input type="password" name="password2" id="email" value={item.password2|| ''}
                               onChange={this.handleChange} autoComplete="password2"/>
                               <p style={{color: "red"}}>{this.state.confirmPasswordError}</p>
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