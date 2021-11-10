import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mx-8">
            <h1 className="mb-4">Login</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-4">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl placeholder="Password" type="password" />
            </InputGroup>
            <Button variant="outline-primary" href="/skating-app/home/">
                Login
            </Button>
        </div>
    );
};

export default Login;
