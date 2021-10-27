import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
const options = [
    { value: 'Expert', label: 'Expert' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
   
  ];
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
// TODO: Not finished yet
const Demographics = () => {
    return (
        <div >
            <h1 className="mb-4">First Time Demographics Setup</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text>Type of Skating</InputGroup.Text>
                <FormControl placeholder="Type of Skating" />
            </InputGroup>
            
            <InputGroup className="mb-4">
                <InputGroup.Text>Tricks</InputGroup.Text>
                <FormControl placeholder="Tricks" />
            </InputGroup>
            <Button variant="outline-primary" href='/home'>
                Submit
            </Button>
        </div>
        
    );
};

export default Demographics;
