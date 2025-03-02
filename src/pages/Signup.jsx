import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with ${email}`);
  };

  return (
    <Card className="mx-auto" style={{ width: '400px', padding: '20px' }}>
      <Card.Body>
        <h2 className="text-center">Signup</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter full name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Signup
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Link to="/login">Already have an account? Login</Link>
        </div>
        <div className="text-center mt-2">
          <Link to="/">Go back to Home</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Signup;
