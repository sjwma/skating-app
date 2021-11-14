import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

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
const Social = ['Group', 'Alone', 'Both'];
const Location = ['Yes', 'No'];
const Freq = ['Once', 'Twice', 'Thrice', 'Every Day'];

const Demographics = () => {
    const [values, setValues] = useState({
        skating_type: '',
        experience: '',
        tricks: '',
        social: '',
        freq: '',
        address: '',
        phone: '',
        location: '',
    });

    useEffect(() => {
        localStorage.setItem('skating_type', values.skating_type);
        localStorage.setItem('experience', values.experience);
        localStorage.setItem('tricks', values.tricks);
        localStorage.setItem('social', values.social);
        localStorage.setItem('freq', values.freq);
        localStorage.setItem('address', values.address);
        localStorage.setItem('phone', values.phone);
        localStorage.setItem('location', values.location);
    }, [values]);

    const handleInputChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        history.push('/home');
    };

    return (
        <form onSubmit={handleSubmit} className="m-4">
            <h1 className="mb-4">First Time Demographics Setup</h1>
            <div>
                <label className="mb-4">Type of Skating:</label>
                <select
                    name="skating_type"
                    value={values.skating_type}
                    onChange={handleInputChange}
                >
                    <option value="">Select Type</option>
                    {Skating_Type.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Experience*:</label>
                <select
                    name="experience"
                    required
                    value={values.experience}
                    onChange={handleInputChange}
                >
                    <option value="">Select Experience</option>
                    {Experience.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Tricks:</label>
                <input
                    name="tricks"
                    type="text"
                    placeholder="Alpha flip"
                    value={values.tricks}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Social*:</label>
                <select
                    name="social"
                    required
                    value={values.social}
                    onChange={handleInputChange}
                >
                    <option value="">Social Preference</option>
                    {Social.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Freqency per Week*:</label>
                <select
                    name="freq"
                    required
                    value={values.freq}
                    onChange={handleInputChange}
                >
                    <option value="">Social Preference</option>
                    {Freq.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4">Address:</label>
                <input
                    name="address"
                    type="text"
                    placeholder=""
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Phone number:</label>
                <input
                    name="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    value={values.phone}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4">Enable location:</label>
                <select
                    name="location"
                    required
                    value={values.location}
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    {Location.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Demographics;
