//import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Select from 'react-select';
// import {
//     useHistory,
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
// } from 'react-router-dom';
// // import Select from 'react-select';

// const type_options = [
//     { value: 'Freestyle', label: 'Freestyle' },
//     { value: 'Vert', label: 'Vert' },
//     { value: 'Street', label: 'Steet' },
//     { value: 'Park', label: 'Park' },
//     { value: 'Cruising', label: 'Cruising' },
//     { value: 'Downhill', label: 'Downhill' },
//     { value: 'Others', label: 'Others' },
// ];

// const exp_options = [
//     { value: 'Expert', label: 'Expert' },
//     { value: 'Beginner', label: 'Beginner' },
//     { value: 'Intermediate', label: 'Intermediate' },
// ];

// const age_options = [
//     { value: '15-18', label: '15-18' },
//     { value: '18-25', label: '18-25' },
//     { value: '25-30', label: '25-30' },
//     { value: '30-35', label: '30-35' },
//     { value: '>35', label: '>35' },
// ];

// const gender_options = [
//     { value: 'Female', label: 'Female' },
//     { value: 'Male', label: 'Male' },
//     { value: 'X', label: 'X' },
// ];
// //   state = {
// //     selectedOption: null,
// //   };
// //   handleChange = selectedOption => {
// //     this.setState({ selectedOption });
// //     console.log(`Option selected:`, selectedOption);
// //   };
// // TODO: Not finished yet
// const Friendfilter = () => {
//     return (
//         <div className="m-4">
//             <h1 className="mb-4">
//                 Enter information about friends you are looking for
//             </h1>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Experience</InputGroup.Text>
//                 <Select options={exp_options} />
//             </InputGroup>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Skating type</InputGroup.Text>
//                 <Select options={type_options} />
//             </InputGroup>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Gender</InputGroup.Text>
//                 <Select options={gender_options} />
//             </InputGroup>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Age</InputGroup.Text>
//                 <Select options={age_options} />
//             </InputGroup>
//             <Button
//                 variant="outline-primary"
//                 href="/friendsearchresult"
//                 className="mb-4"
//             >
//                 Submit
//             </Button>
//         </div>
//     );
// };

// export default Friendfilter;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Experience = ['Beginner', 'Intermediate', 'Expert'];
const Skating_Type = [
    'Freestyle',
    'Vert',
    'Street',
    'Park',
    'Cruising',
    'Downhill',
    'Others',
];
const Gender = ['Female', 'Male', 'X'];

function Friendfilter() {
    const [values, setValues] = useState({
        Experience: '',
        Skating_Type: '',
        Gender: '',
        Age: '',
        Location: '',
    });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        history.push('/friendsearchresult');
    };

    return (
        // <form onSubmit={onSubmit}>
        <form onSubmit={handleSubmit}>
            <h1 className="mb-4">
                Enter information of friends you are looking for
            </h1>

            <div align="center">
                <label className="mb-4">Experience*:</label>
                <select
                    required
                    value={values.Experience}
                    onChange={set('Experience')}
                >
                    <option value="">Select Experience</option>
                    {Experience.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Type of Skating*:</label>
                <select
                    required
                    value={values.Skating_Type}
                    onChange={set('Skating_Type')}
                >
                    <option value="">Select Experience</option>
                    {Skating_Type.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Gender*:</label>
                <select required value={values.Gender} onChange={set('Gender')}>
                    <option value="">Select Experience</option>
                    {Gender.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Age*:</label>
                <input
                    type="number"
                    required
                    min="1"
                    value={values.Age}
                    onChange={set('Age')}
                />
            </div>

            <div>
                <label className="mb-4">Enter zip code:</label>
                <input
                    type="text"
                    placeholder="75080"
                    value={values.Location}
                    onChange={set('Location')}
                />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

            {/* <div>
            <Button variant="outline-primary" href='/home'>
                 Back
            </Button>  
</div>    */}
        </form>
    );
}

export default function Page() {
    return (
        <div className="App">
            <Friendfilter />
        </div>
    );
}
