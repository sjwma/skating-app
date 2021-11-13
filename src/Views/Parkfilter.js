// import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import Select from 'react-select'
// import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// // import Select from 'react-select';



// const cost_options = [
//     { value: '0', label: '0' },
//     { value: '<=5', label: '<=5' },
//     { value: '<=10', label: '<=10' },
//     { value: '<=15', label: '<=15' },
//     { value: '>20', label: '>20' },

   
//   ];
 
//   const time_options = [
//     { value: '9:00-10:00 AM', label: '9:00-10:00 AM' },
//     { value: '10:00-11:00 AM', label: '10:00-11:00 AM' },
//     { value: '11:00-12:00 AM', label: '11:00-12:00 AM' },
//     { value: '12:00-1:00 PM', label: '12:00-1:00 PM' },
//     { value: '1:00-2:00 PM', label: '1:00-2:00 PM' },
//     { value: '2:00-3:00 PM', label: '2:00-3:00 PM' },
//     { value: '3:00-4:00 PM', label: '3:00-4:00 PM' },
//     { value: '4:00-5:00 PM', label: '4:00-5:00 PM' },
//     { value: '5:00-6:00 PM', label: '5:00-6:00 PM' },
//     { value: '6:00-7:00 PM', label: '6:00-7:00 PM' },
//     { value: '7:00-8:00 PM', label: '7:00-8:00 PM' },
//     { value: '8:00-9:00 PM', label: '8:00-9:00 PM' },

   
//   ];

//   const type_options = [
//     { value: 'Private', label: 'Private' },
//     { value: 'Public', label: 'Public' },
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
// const Parkfilter = () => {
//     return (
//         <div >
//             <h1 className="mb-4">Enter information about parks you are looking for</h1>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Name</InputGroup.Text>
//                 <FormControl placeholder="Name" />
//             </InputGroup>
            
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Tricks</InputGroup.Text>
//                 <FormControl placeholder="Tricks" />
//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Types*</InputGroup.Text>
//                 <FormControl placeholder="Types*" />
//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Cost per hour</InputGroup.Text>
//                 <InputGroup.Text>Min</InputGroup.Text> <Select options={cost_options} />
//                 <InputGroup.Text>Max</InputGroup.Text> <Select options={cost_options} />

//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Park type</InputGroup.Text>
//             <Select options={type_options} />

//             </InputGroup>

//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Time</InputGroup.Text>
//             <Select options={time_options} />
//             </InputGroup>

 
//            <Button variant="outline-primary" href='/parksearchresult'>
//                 Submit
//             </Button>  



        

        
//         </div>
        
//     );
// };

// export default Parkfilter;


import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
const Experience = ["Beginner", "Intermediate", "Expert"];
const Skating_Type = ["Freestyle","Vert", "Street", "Park","Cruising","Downhill","Others"];
const Park_type = ["Public", "Private", "Both"];


function Parkfilter() {
  const [values, setValues] = useState({
    Name: "", Tricks: "", Skating_Type: "", Cost1: "",Cost2: "", Start_time: "",End_time: "",Park_type: "", Start_date: "", End_date: "", Location:""
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
                                  
    history.push("/parksearchresult");
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
    
      <h1 className="mb-4">Enter information of parks you are looking for</h1>

      <div>
      <label className="mb-4">Name:</label>
      <input 
        type="text" placeholder="Highland park"
        value={values.Name} onChange={set("Name")}
      />
</div>

<div>
      <label className="mb-4">Tricks:</label>
      <input 
        type="text" placeholder="Alpha flip"
        value={values.Tricks} onChange={set("Tricks")}
      />
</div>


<div>
      <label className="mb-4">Cost per Hour Min:</label>
      <input
        type="number"  min="1"
        value={values.Cost1} onChange={set("Cost1")} 
        />
        <label className="mb-4">Max:</label>
        <input
        type="number"  min="1"
        value={values.Cost2} onChange={set("Cost2")} 

      />
</div> 


<div>
      <label className="mb-4">Type of Skating*:</label>
      <select 
        required
        value={values.Skating_Type} onChange={set("Skating_Type")}
      >
        <option value="">Select Experience</option>
        {Skating_Type.map(c => <option key={c}>{c}</option>)}
      </select>
</div>




 <div>
 <label className="mb-4">Start Time:</label>
      <input
        type="date"  
        value={values.Start_date} onChange={set("Start_date")} 
        />
        <input
        type="time"  
        value={values.Start_time} onChange={set("Start_time")} 
        
        />
        
        <label className="mb-4">End Time:</label>
        <input
        type="date"  min="1"
        value={values.End_date} onChange={set("End_date")} 
        />
        <input
        type="time"  
        value={values.End_time} onChange={set("End_time")} 
      />
</div> 

<div>
      <label className="mb-4">Enter zip code:</label>
      <input 
        type="text" placeholder="75080"
        value={values.Location} onChange={set("Location")}
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
         <Parkfilter />
       </div>
     );
  }