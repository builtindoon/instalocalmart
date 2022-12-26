import React from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
export class Description extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
    return (
        <div className="container">
          <h1>Description</h1>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Street Address
        </Form.Text>
    
        <Form.Control type="text" />
        <Form.Text className="text-muted">
         Street Address Line 2
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" />
        <Form.Text className="text-muted">
         Please enter valid phone number
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
      <Form.Text className="text-muted">
       example@example.com
      </Form.Text>
    </Form.Group>
      <FormGroup>
      <Form.label>BirthDate</Form.label>
      <Input type='date'
        placeholder='Enter BirthDate'
        value={values.birthdate} onChange={handleChange}
        name='birthdate'
      />
      {errors.birthdate && <p className='error'>{errors.birthdate}</p>}
     </FormGroup>
     <Form.Group className ="mb-3">
        <Form.Label>What time of day do you typically shop?</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className ="mb-3">
        <Form.Label>What days of the week do you typically shop?</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className ="mb-3">
      <Form.Label>What types of groceries do you typically buy?</Form.Label>
      <Form.Control type="text" />
      <Form.Control type="text" />
    </Form.Group>
    <Form.Group className ="mb-3">
    <Form.Label>Do you have any dietary restrictions or allergies?</Form.Label>
    <Form.Control type="text" />
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group className ="mb-3">
  <Form.Label>Do you have any comments or suggestions on how we can improve your shopping experience?</Form.Label>
  <Form.Control type="text" />
  <Form.Control type="text" />
</Form.Group>
   </Form>
    </div>
        )
     }
  }

  export default Description;