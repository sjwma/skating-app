// import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Select from 'react-select'
// import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Select from 'react-select';



// const exp_options = [
//     { value: 'Expert', label: 'Expert' },
//     { value: 'Beginner', label: 'Beginner' },
//     { value: 'Intermediate', label: 'Intermediate' },
   
//   ];
 
//   const freq_options = [
//     { value: 'Once', label: 'Once' },
//     { value: 'Twice', label: 'Twice' },
//     { value: 'Thrice', label: 'Thrice' },
//     { value: 'Every Day', label: 'Every Day' },
   
//   ];

//   const social_options = [
//     { value: 'Group', label: 'Group' },
//     { value: 'Alone', label: 'Alone' },
//     { value: 'Both', label: 'Both' },
   
//   ];
// //   state = {
// //     selectedOption: null,
// //   };
// //   handleChange = selectedOption => {
// //     this.setState({ selectedOption });
// //     console.log(`Option selected:`, selectedOption);
// //   };
// // TODO: Not finished yet
// const Demographics = () => {
//     return (
//         <div >
//             <h1 className="mb-4">First Time Demographics Setup</h1>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Type of Skating</InputGroup.Text>
//                 <FormControl placeholder="Type of Skating" />
//             </InputGroup>
            
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Tricks</InputGroup.Text>
//                 <FormControl placeholder="Tricks" />
//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Experience</InputGroup.Text>
//             <Select options={exp_options} />
//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Social Preference</InputGroup.Text>
//             <Select options={social_options} />
//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Frequency</InputGroup.Text>
//             <Select options={freq_options} />
//             </InputGroup>

 
//            <Button variant="outline-primary" href='/home'>
//                 Submit
//             </Button>  



//         )

        
//         </div>
        
//     );
// };
// export default Demographics;



import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import { useHistory } from "react-router-dom";

const Experience = ["Beginner", "Intermediate", "Expert"];
const Skating_Type = ["Freestyle","Vert", "Street", "Park","Cruising","Downhill","Others"];
const Social = ["Group", "Alone", "Both"];
const Location = ["Yes", "No"];
const Freq = ["Once", "Twice", "Thrice","Every Day"];


function RegisterYourCatForm() {
  const [values, setValues] = useState({
    Skating_Type: "", Experience: "", Tricks: "", Social: "",Freq: "", Address: "" , Phone :"", Location:""
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    const response = await fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }

  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
                                  
    history.push("/home");
   };

//   const onSubmit = async (event) => {
//     event.preventDefault(); // Prevent default submission
//     try {
//       await saveFormData();
//       alert('Your registration was successfully submitted!');
//       setValues({
//         name: '', color: '', age: '', habits: '' 
//       });
//     } 
//     catch (e) {
//       //alert(`Registration failed! ${e.message}`);
//       alert('Your registration was successfully submitted!');
      
//     }
    

      
  
 
  return (
    // <form onSubmit={onSubmit}> 
     <form onSubmit={handleSubmit}>
      <h1 className="mb-4">First Time Demographics Setup</h1>
<div>
<label className="mb-4">Type of Skating:</label>
      <select 
        value={values.Skating_Type} onChange={set("Skating_Type")}
      >
        <option value="">Select Type</option>
        {Skating_Type.map(c => <option key={c}>{c}</option>)}
      </select>
</div>

<div>
      <label className="mb-4">Experience*:</label>
      <select 
        required
        value={values.Experience} onChange={set("Experience")}
      >
        <option value="">Select Experience</option>
        {Experience.map(c => <option key={c}>{c}</option>)}
      </select>
</div>

<div>
      <label className="mb-4">Tricks:</label>
      <input 
        type="text" placeholder="Alpha flip"
        value={values.Tricks} onChange={set("Tricks")}
      />
</div>

<div>
      <label className="mb-4">Social*:</label>
      <select 
        required
        value={values.Social} onChange={set("Social")}
      >
        <option value="">Social Preference</option>
        {Social.map(c => <option key={c}>{c}</option>)}
      </select>
</div>

{/* <div>
      <label className="mb-4">Age*:</label>
      <input
        type="number" required min="1"
        value={values.age} onChange={set("age")} 
      />
</div> */}

<div>
      <label className="mb-4">Freqency per Week*:</label>
      <select 
        required
        value={values.Freq} onChange={set("Freq")}
      >
        <option value="">Social Preference</option>
        {Freq.map(c => <option key={c}>{c}</option>)}
      </select>
</div>

<div>
      <label className="mb-4">Address:</label>
      <input 
        type="text" placeholder=""
        value={values.Address} onChange={set("Address")}
      />
</div>

<div>
      <label className="mb-4">Phone number:</label>
      <input 
        type="tel" placeholder="123-456-7890"
        value={values.Phone} onChange={set("Phone")}
      />
</div>

<div>
<label className="mb-4">Enable location:</label>
<input type="radio" value={values.Location} onChange={set("Location")} /> Yes
<input type="radio" value={values.Location} onChange={set("Location")} /> No
</div>

<div>
      <button type="submit" >Submit</button>
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
      <RegisterYourCatForm />
    </div>
  );
}

