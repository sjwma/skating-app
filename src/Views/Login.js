import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // get localstorage username and password
        const stored_email = localStorage.getItem('email');
        const stored_password = localStorage.getItem('password');

        console.log('submit vals');
        console.log(e.target.email.value);
        console.log(e.target.password.value);

        // make sure there is an existing email and password
        if (
            !stored_email ||
            !stored_password ||
            stored_email.length < 1 ||
            stored_password.length < 1
        ) {
            alert('No email or password stored');
        } else if (
            e.target.email.value !== stored_email ||
            e.target.password.value !== stored_password
        ) {
            alert('Incorrect email or password');
        } else {
            history.push('/home');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="m-4">
            <h1 className="mb-4">Login</h1>

            <div>
                <label className="mb-4">Email*:</label>
                <input
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Password*:</label>
                <input
                    name="password"
                    type="password"
                    required
                    value={values.password}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default Login;
