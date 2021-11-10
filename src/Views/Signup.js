import React from 'react';
import { useHistory } from 'react-router';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Signup = () => {
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    };
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
                <FormControl placeholder="Password" type="password" />
            </InputGroup>
            <Button
                variant="outline-primary"
                onClick={() => handleClick('/demographic')}
            >
                Signup
            </Button>
        </div>
    );
};

export default Signup;
