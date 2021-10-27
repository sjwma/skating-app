import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Login = () => {
    return (
        <div>
            Login
            <InputGroup>
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl placeholder="Password" />
            </InputGroup>
        </div>
    );
};

export default Login;
