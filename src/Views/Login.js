// import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import { useHistory } from "react-router-dom";

// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen mx-8">
//             <h1 className="mb-4">Login</h1>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Email</InputGroup.Text>
//                 <FormControl placeholder="Email" />
//             </InputGroup>
//             <InputGroup className="mb-4">
//                 <InputGroup.Text>Password</InputGroup.Text>
//                 <FormControl placeholder="Password" type = 'password'/>
//             </InputGroup>
//             <Button variant="outline-primary" href="/home">
//                 Login
//             </Button>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
     Email: "", Password: ""
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
      <h1 className="mb-4">Login</h1>
{/* <div>
      <label className="mb-4">Name*:</label>
      <input 
        type="text" required
        value={values.Name} onChange={set("Name")}
      />
</div> */}



<div>
      <label className="mb-4">Email*:</label>
      <input 
        type="email" required
        value={values.Email} onChange={set("Email")}
      />
</div>

<div>
      <label className="mb-4">Password*:</label>
      <input 
        type="password" required
        value={values.Password} onChange={set("Password")}
      />
</div>

<div>
      <button type="submit">Login</button>
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
      <Login />
    </div>
  );
}





