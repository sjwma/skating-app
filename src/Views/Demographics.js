import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// TODO: Not finished yet
const Demographics = () => {
    return (
        <div>
            First Time Demographics Setup
            <InputGroup className="mb-2">
                <InputGroup.Text>Type of Skating</InputGroup.Text>
                <FormControl placeholder="Email" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl placeholder="Password" />
            </InputGroup>
            <Button>
                <Link to="/home">Login</Link>
            </Button>
        </div>
    );
};

export default Demographics;
