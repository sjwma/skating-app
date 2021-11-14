import Button from 'react-bootstrap/Button';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = () => {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="my-4">Skate</h1>
            <Button
                variant="outline-primary"
                size="lg"
                className="mb-4"
                onClick={() => handleClick('/login')}
            >
                Login
            </Button>
            <Button
                variant="outline-primary"
                size="lg"
                onClick={() => handleClick('/signup')}
            >
                Sign Up
            </Button>
        </div>
    );
};

export default Main;
