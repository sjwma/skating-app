import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="flex flex-col items-center">
            <div>Skate</div>
            <Button variant="primary" size="lg">
                <Link to="/login">Login</Link>
            </Button>
            <Button variant="primary" size="lg">
                <Link to="/signup">Sign Up</Link>
            </Button>
        </div>
    );
};

export default Main;
