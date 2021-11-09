import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Select from 'react-select'
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Select from 'react-select';



const exp_options = [
    { value: 'Expert', label: 'Expert' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
   
  ];
 
  const freq_options = [
    { value: 'Once', label: 'Once' },
    { value: 'Twice', label: 'Twice' },
    { value: 'Thrice', label: 'Thrice' },
    { value: 'Every Day', label: 'Every Day' },
   
  ];

  const social_options = [
    { value: 'Group', label: 'Group' },
    { value: 'Alone', label: 'Alone' },
    { value: 'Both', label: 'Both' },
   
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

            <InputGroup className="mb-4">
                <InputGroup.Text>Experience</InputGroup.Text>
            <Select options={exp_options} />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Social Preference</InputGroup.Text>
            <Select options={social_options} />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Frequency</InputGroup.Text>
            <Select options={freq_options} />
            </InputGroup>

 
           <Button variant="outline-primary" href='/home'>
                Submit
            </Button>  



        )

        
        </div>
        
    );
};

export default Demographics;
