import React from "react";
import { Link } from "react-router-dom";
import pic from "./Driving-Licence-home-delivery.jpg";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AppNavbar from "./AppNavBar";

class Adddriver extends React.Component {
  emptyItem = {
    DLNo: "",
    Name: "",
    FathersName: "",
    DOB: "",
    BloodGrp: "",
    address: "",
    IssueDate: "",
    AadhaarNo: "",
    Validity: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      dropDownOpen: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    if (this.props.match.params.id !== "new") {
      const localUser = await (
        await fetch(`/local/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: localUser });
    }
  }

  handleChange2 = (code) => {
    let item = { ...this.state.item };
    item.puser = code;
    this.setState({ item });
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/local" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    this.props.history.push("/local");
  }
  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? "Edit User" : "Add User"}</h2>;

    return (
      <div>
        <AppNavbar />
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="mb-1">
            <Label for="DLNo"> DLNo</Label>
            <Input
              type="text"
              name="DLNo"
              id="DLNo"
              value={item.DLNo || ""}
              onChange={this.handleChange}
              autoComplete="DLNo"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="Name"> Name</Label>
            <Input
              type="text"
              name="Name"
              id="Name"
              value={item.Name || ""}
              onChange={this.handleChange}
              autoComplete="Name"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="FatherName">Father Name</Label>
            <Input
              type="text"
              name=" FatherName"
              id="FatherName"
              value={item.FatherName || ""}
              onChange={this.handleChange}
              autoComplete="FatherName"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="BloodGrp"> BloodGrp</Label>
            <Input
              type="text"
              name="BloodGrp"
              id="BloodGrp"
              value={item.BloodGrp || ""}
              onChange={this.handleChange}
              autoComplete="BloodGrp"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for=" IssueDate"> IssueDate</Label>
            <Input
              type="text"
              name=" IssueDatep"
              id=" IssueDate"
              value={item.IssueDate || ""}
              onChange={this.handleChange}
              autoComplete="IssueDate"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="AadhaarNo">AadhaarNo</Label>
            <Input
              type="text"
              name="AadhaarNo"
              id="AadhaarNo"
              value={item.AadhaarNo || ""}
              onChange={this.handleChange}
              autoComplete="AadhaarNo"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="Validity">Validity</Label>
            <Input
              type="text"
              name="Validity"
              id="Validity"
              value={item.Validity || ""}
              onChange={this.handleChange}
              autoComplete="Validity"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="AadhaarNo">AadhaarNo</Label>
            <Input
              type="text"
              name="AadhaarNo"
              id="AadhaarNo"
              value={item.AadhaarNo || ""}
              onChange={this.handleChange}
              autoComplete="AadhaarNo"
            />
          </FormGroup>
          <Input
            id="date"
            label="Choose your birthdate"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormGroup className="mb-1">
            <Label for="Original LA">original LA</Label>
            <Input
              type="text"
              name="original LA"
              id="original LA"
              value={item.originalLA || ""}
              onChange={this.handleChange}
              autoComplete="AadhaarNo"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="Original LA">original LA</Label>
            <Input
              type="text"
              name="original LA"
              id="original LA"
              value={item.originalLA || ""}
              onChange={this.handleChange}
              autoComplete="AadhaarNo"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="Date of issue">Date of issue</Label>
            <Input
              type="text"
              name="Date of issue"
              id="Date of issue"
              value={item.Dateofissue || ""}
              onChange={this.handleChange}
              autoComplete="Date of issue"
            />
          </FormGroup>
          <FormGroup className="mb-1">
            <Label for="Class of Vehicles">Class of Vehicles</Label>
            <Input
              type="text"
              name="Class of Vehicles"
              id="Date of issue"
              value={item.ClassofVehicles || ""}
              onChange={this.handleChange}
              autoComplete="Class of Vehicles"
            />
          </FormGroup>
         
          <h3>upload pic</h3>
          <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
            <br></br>
          <FormGroup className="mb-1">
            <Button color="primary" type="submit">
              Submit
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/local">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Adddriver;
