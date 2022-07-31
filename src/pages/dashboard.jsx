import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { isAuthenticated } from '../middlewares/isUserAuthenticated';
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheets/dashboard.css'
import { LogOut } from '../middlewares/logOutUser';

export default function Dashboard() {
  return (
    !isAuthenticated() ? <Redirect to="/login" /> : 
      <div>
      <Navbar bg="light">
        <Container>
            <Navbar.Brand href="/" style={{ "fontWeight": "bold"}}>Dashboard</Navbar.Brand>
          <Button variant="primary" onClick={() => LogOut()}>Log Out</Button>        
        </Container>
      </Navbar>
      <Container>
      <Form className='dashboard-form-wrapper'>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text>First and Last Name</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Social Media Connect</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Social Sites"
            aria-label="Social Sites"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">.com</InputGroup.Text>
        </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>About Yourself</Form.Label>
        <InputGroup>
          <InputGroup.Text>Type Here</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="private-acnt-radio" label="Want to Make Account Private ?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    </div>
  )
}
