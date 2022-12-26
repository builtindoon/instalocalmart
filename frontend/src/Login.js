import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Col,ButtonDropdown ,Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import AppNavbar from "./AppNavBar";

class Login extends Component {
    emptyItem = {
        email: '',
        password: '',
        puser: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            dropDownOpen:false,
            validation: {
	email: '',
	password: ''
}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // async componentDidMount() {
    //     if (this.props.match.params.email !== 'new') {
    //         const userDetail = await (await fetch(`/local/${this.props.match.params.email,this.props.match.params.password}`)).json();
    //         console.log(`/local/${this.props.match.params.email,this.props.match.params.password}`);
    //         this.setState({item: userDetail});
    //     }
    // }
	
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
        let errors = this.state.validation;

      // email validation
     const emailCond =
      "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
      let inputValues = {email: event.target.email.value, password: event.target.password.value};
      console.log(inputValues);
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }
     //password validation
    const cond1 = "^(?=.*[a-z]).{6,20}$";
    const cond2 = "^(?=.*[A-Z]).{6,20}$";
    const cond3 = "^(?=.*[0-9]).{6,20}$";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

       let val = {...this.state.validation};
		val = errors;
	    this.setState({val})
       console.log(this.state.validation);
       if(errors.email === "" && errors.password === ""){
        const {item} = this.state;

        let res = await fetch('/local' + (item.email ? '/' + item.email : ''), {
            method: 'GET',
        });
        let resJson = await res.json();
        if(res.status!==200) alert("This email does not exist");
        else{
	if(this.state.item.password!==resJson.password) alert("Password not match");
	else alert("Login successfull");
}
        this.props.history.push('/login');
        }
    }
    

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Client' : 'Login'}</h2>;
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit} method="POST">
                 <FormGroup row>
                 <Col sm={2}>
                 <Label for="email">Select User type:</Label>		
                 </Col>
                 <Col sm={5}>
                    	<ButtonDropdown>
				        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
				            <DropdownToggle color="primary" caret className="dropdown-toggle" style={{width: "540px", marginBottom: "15px", backgroundColor: "#fff", color: "#000"}}>
				                {this.state.item.puser!==""?this.state.item.puser:"Choose any one"}
				            </DropdownToggle>
				            <DropdownMenu className="currency-dropdown">
				                    <DropdownItem onClick={() => this.handleChange2("End User(EU)")} dropDownValue="End User(EU)">End User(EU)</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("BU")} dropDownValue="BU">BU</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("Admin(CC)")} dropDownValue="Admin(CC)">Admin(CC)</DropdownItem>
				                    <DropdownItem onClick={() => this.handleChange2("Store Admin(SA)")} dropDownValue="Store Admin(SA)">Store Admin(SA)</DropdownItem>
				                </DropdownMenu>
				            </Dropdown>
				        </ButtonDropdown>
				        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email:</Label>
                        <Col sm={5}>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                               <p style={{"color": "red"}}>{this.state.validation.email}</p>
                       </Col>
                    </FormGroup>
                    <FormGroup row style={{marginTop: "30px"}}>
                        <Label for="email" sm={2}>Password:</Label>
                        <Col sm={5}>
                        <Input type="password" name="password" id="passwrod" value={item.password || ''}
                               onChange={this.handleChange} autoComplete="password"/>
                               <p style={{"color": "red"}}>{this.state.validation.password}</p>
                               </Col>
                    </FormGroup>
                    <FormGroup style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
                        <Button style={{margin: "30px"}} color="primary" type="submit">Login</Button>{' '}
                        <Button style={{margin: "30px"}} color="secondary" tag={Link} to="/local">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(Login);