import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            Create Account
            <InputGroup className="mb-2">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup className="mb-2">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl placeholder="Password" />
            </InputGroup>
            <Button>
                <Link to="/">Submit</Link>
            </Button>
        </div>
    );
};

export default Signup;
