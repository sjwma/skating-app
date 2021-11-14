import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        localStorage.setItem('name', values.name);
        localStorage.setItem('email', values.email);
        localStorage.setItem('password', values.password);
    }, [values]);

    const handleInputChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        history.push('/demographic');
    };

    return (
        <form onSubmit={handleSubmit} className="m-4">
            <h1 className="mb-4">Create Account</h1>
            <div>
                <label className="mb-4">Name*:</label>
                <input
                    name="name"
                    type="text"
                    required
                    value={values.name || ''}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Email*:</label>
                <input
                    name="email"
                    type="email"
                    required
                    value={values.email || ''}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Password*:</label>
                <input
                    name="password"
                    type="password"
                    required
                    value={values.password || ''}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Signup;
