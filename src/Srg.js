import React, { Component } from 'react';
import './Srg.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class Srg extends Component {
  render() {
    return (
      <div class="main">
      <Form className="Srg">
        <h2> LOGIN </h2>
        <Form.Group controlId="formBasicEmail"> <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p className="forget-password text-right">
    Forget <a href="#"> password?</a>
     </p>
      </Form>
      </div>
    );
  }
}

export default Srg;
       