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
      this.state = { item: this.emptyItem };
      this.handleChange = this.handleChange.bind(this);
      this.handleShopName = this.handleShopName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
          <div className="container" style={{ padding: "30px 10px" }}>
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
                      <option value="pune">Pune</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="bengaluru">Bengaluru</option>
                    </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-1"   style={{ display: "flex" }} >
                    <Form.Label className="control-label col-sm-2">District</Form.Label>
                    <div className="col-sm-10">
                    <Form.Select name="district" id="district" defaultValue={item.district || ''} onChange={this.handleChange} >
                      <option>District...</option>
                      <option value="bihar">Bihar</option>
                      <option value="dehradun">Dehradun</option>
                      <option value="lucknow">Lucknow</option>
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
                        onChange={this.handleChange}
                       checked={item.deliveryProvided}
                      />
                      <Form.Check
                        type="radio"
                        name="deliveryProvided"
                        id="deliveryProvided"
                        label={`No`}
                        checked={!item.deliveryProvided}
                        onChange={this.handleChange}
                      />
                      </div>
                    </Form.Group>
                  </>
                  <Form.Label className="control-label col-sm-2">Items to be added</Form.Label>
                  <br></br>
  
                  <Button variant="none" type="submit">
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

