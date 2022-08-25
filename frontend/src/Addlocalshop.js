import React, { Component } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import { FormCheck, FormLabel } from "react-bootstrap";
  function handleOnChange(value) {}
  class Addlocalshop extends React.Component {
	
	emptyItem = {
        shopName: '',
        shopAddress: '',
        state:'',
        district:'',
        pincode:'',
        landmark:'',
        deliveryProvided:false
    };
	
    constructor(props) {
      super(props);
      this.state = { item: this.emptyItem, display: "none" };
      this.handleChange = this.handleChange.bind(this);
      this.handleShopName = this.handleShopName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDisplay = this.handleDisplay.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    
    handleDisplay(event) {
	if(this.state.display == "none")
		this.setState({display: "flex"});
		else 
		this.setState({display: "none"});
	}
    
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
		console.log(item);
        await fetch('/localshop' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/localshop');
        alert("Submitted successfully");
    }
    
    handleShopName(event) {
      event.preventDefault();
    }
    render() {
	const {item} = this.state;
      return (
        <div>
          <div className="container" style={{ padding: "20px 5px" }}>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <h1>Add local shop </h1>
  
                <Form className="form-horizontal" onSubmit={this.handleSubmit} >
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">Shop Name</Form.Label>
                    <div className="col-sm-10">
                    <Form.Control type="text" name="shopName" id="shopName" value={item.shopName || ''} onChange={this.handleChange} autoComplete="shopName" />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">Shop Address</Form.Label>
                    <div className="col-sm-10">
                    <Form.Control type="text" name="shopAddress" id="shopAddress" value={item.shopAddress || ''} onChange={this.handleChange} autoComplete="shopAddress" />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">State</Form.Label>
                    <div className="col-sm-10">
                    <Form.Select name="state" id="state" defaultValue={item.state || ''} onChange={this.handleChange} >
                      <option>State...</option>
                      <option value="delhi">Delhi</option>
                      <option value="punjab">Punjab</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="assam">Assam</option>
                      <option value="uttrakhand">Uttrakhand</option>
                      <option value="uttar pradesh">Uttar Pradesh</option>
                      <option value="bihar">Bihar</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="west bengal">West Bengal</option>
                      <option value="meghalya">Meghalaya</option>
                      <option value="arunachal pradesh">Arunachal Pradesh</option>
                      <option value="jharkhand">Jharkhand</option>
                      <option value="sikkim">Sikkim</option>
                      <option value="himachal pradesh">Himachal Pradesh</option>
                      <option value="kerala">Kerala</option>
                      <option value="tripura">Tripura</option>
                      <option value="mizoram">Mizoram</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="nagaland">Nagaland</option>
                      <option value="manipur">Manipur</option>
                      <option value="tamil nadu">Tamil Nadu</option>
                      <option value="madhya pradesh">Madhya Pradesh</option>
                      <option value="haryana">Haryana</option>
                      <option value="andhra pradesh">Andhra Pradesh</option>
                    </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">District</Form.Label>
                    <div className="col-sm-10">
                    <Form.Select name="district" id="district" defaultValue={item.district || ''} onChange={this.handleChange} >
                      <option>District...</option>
                      <option value="banka">Banka</option>
                      <option value="dehradun">Dehradun</option>
                      <option value="lucknow">Lucknow</option>
                      <option value="biswanath">Biswanath</option>
                      <option value="ahmedabad">Ahmedabad</option>
                      <option value="ambala">Ambala</option>
                      <option value="shimla">Shimla</option>
                      <option value="bokaro">Bokaro</option>
                      <option value="bagalkot">Bagalkot</option>
                      <option value="alappuzha">Alappuzha</option>
                      <option value="agar malwa">Agar Malwa</option>
                      <option value="akola">Akola</option>
                      <option value="bishnupur">Bishnupur</option>
                      <option value="east garo hills">East Garo Hills</option>
                      <option value="aizawl">Aizawl</option>
                      <option value="dimapur">Dimapur</option>
                      <option value="amritsar">amritsar</option>
                      <option value="ajmer">Ajmer</option>
                      <option value="pakyong">Pakyong</option>
                      <option value="chennai">Chennai</option>
                      <option value="dhalai">Dhalai</option>
                      <option value="alipurduar">alipurduar</option>
                      <option value="central dehli">Central Dehli</option>
                  </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">Pincode</Form.Label>
                    <div className="col-sm-10">
                    <Form.Control type="text" name="pincode" id="pincode" value={item.pincode || ''} onChange={this.handleChange} autoComplete="pincode" />
                    </div>
                  </Form.Group>
  
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">Landmark</Form.Label>
                    <div className="col-sm-10">
                    <Form.Control type="text" name="landmark" id="landmark" value={item.landmark || ''} onChange={this.handleChange} autoComplete="landmark" />
                    </div>
                  </Form.Group>
  
                  <>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                      <Form.Label className="control-label col-sm-2">Delivery Provided:</Form.Label>
                      <div className="col-sm-10">
                      <Form.Check
                        type="radio"
                        name="deliveryProvided"
                        id="deliveryProvided"
                        label={`Yes`}
                        onChange={this.handleDisplay}
                       //checked={item.deliveryProvided}
                      />
                      <Form.Check
                        type="radio"
                        name="deliveryProvided"
                        id="deliveryProvided"
                        label={`No`}
                        //checked={!item.deliveryProvided}
                        onChange={this.handleDisplay}
                      />
                      </div>
                    </Form.Group>
                  </>
                   <Form.Group className="mb-1" style={{ display: this.state.display }} >
                    <Form.Label className="control-label col-sm-2">Delivery address</Form.Label>
                    <div className="col-sm-10">
                    <Form.Control type="text" name="landmark" id="landmark" value="" autoComplete="landmark" />
                    </div>
                  </Form.Group>
                  <Form.Label className="control-label col-sm-2">Items to be added</Form.Label>
                  <br></br>
  
                  <Button variant="success" type="submit">
                    Add Store
                  </Button>
                  <Button variant="success" type="submit">
                    Cancel
                  </Button>
                </Form>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Addlocalshop;

