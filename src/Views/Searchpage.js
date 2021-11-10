import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Searchpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen mx-8">
            <h1 className="mb-4">What are you looking for?</h1>

            <Button
                variant="outline-primary"
                href="/friendfilter/"
                className="mb-4"
            >
                Friends
            </Button>

            <Button variant="outline-primary" href="/parkfilter/">
                Parks
            </Button>
        </div>
    );
};

export default Searchpage;
