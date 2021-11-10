import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import {
    useHistory,
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
// import Select from 'react-select';

const cost_options = [
    { value: '0', label: '0' },
    { value: '<=5', label: '<=5' },
    { value: '<=10', label: '<=10' },
    { value: '<=15', label: '<=15' },
    { value: '>20', label: '>20' },
];

const time_options = [
    { value: '9:00-10:00 AM', label: '9:00-10:00 AM' },
    { value: '10:00-11:00 AM', label: '10:00-11:00 AM' },
    { value: '11:00-12:00 AM', label: '11:00-12:00 AM' },
    { value: '12:00-1:00 PM', label: '12:00-1:00 PM' },
    { value: '1:00-2:00 PM', label: '1:00-2:00 PM' },
    { value: '2:00-3:00 PM', label: '2:00-3:00 PM' },
    { value: '3:00-4:00 PM', label: '3:00-4:00 PM' },
    { value: '4:00-5:00 PM', label: '4:00-5:00 PM' },
    { value: '5:00-6:00 PM', label: '5:00-6:00 PM' },
    { value: '6:00-7:00 PM', label: '6:00-7:00 PM' },
    { value: '7:00-8:00 PM', label: '7:00-8:00 PM' },
    { value: '8:00-9:00 PM', label: '8:00-9:00 PM' },
];

const type_options = [
    { value: 'Private', label: 'Private' },
    { value: 'Public', label: 'Public' },
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
const Parkfilter = () => {
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    };
    return (
        <div>
            <h1 className="mb-4">
                Enter information about parks you are looking for
            </h1>
            <InputGroup className="mb-4">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl placeholder="Name" />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Tricks</InputGroup.Text>
                <FormControl placeholder="Tricks" />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Types*</InputGroup.Text>
                <FormControl placeholder="Types*" />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Cost per hour</InputGroup.Text>
                <InputGroup.Text>Min</InputGroup.Text>{' '}
                <Select options={cost_options} />
                <InputGroup.Text>Max</InputGroup.Text>{' '}
                <Select options={cost_options} />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Park type</InputGroup.Text>
                <Select options={type_options} />
            </InputGroup>

            <InputGroup className="mb-4">
                <InputGroup.Text>Time</InputGroup.Text>
                <Select options={time_options} />
            </InputGroup>

            <Button
                variant="outline-primary"
                onClick={() => handleClick('/parksearchresult')}
            >
                Submit
            </Button>
        </div>
    );
};

export default Parkfilter;
