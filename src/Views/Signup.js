import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mx-8">
            <h1 className="mb-4">Create Account</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl placeholder="Name" />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl placeholder="Password" type = 'password' />
            </InputGroup>
            <Button variant="outline-primary" href="/demographic">
                Signup
            </Button>
        </div>
    );
};

export default Signup;


