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
const Park_type = ['Public', 'Private', 'Both'];

function Parkfilter() {
    const [values, setValues] = useState({
        name: '',
        tricks: '',
        skating_type: '',
        price: 0,
        time: '',
        park_type: '',
        date: '',
        zip: '',
    });

    useEffect(() => {
        localStorage.setItem('parkfilter_name', values.name);
        localStorage.setItem('parkfilter_tricks', values.tricks);
        localStorage.setItem('parkfilter_skating_type', values.skating_type);
        localStorage.setItem('parkfilter_price', values.price);
        localStorage.setItem('parkfilter_start_time', values.time);
        localStorage.setItem('parkfilter_park_type', values.park_type);
        localStorage.setItem('parkfilter_date', values.date);
        localStorage.setItem('parkfilter_zip', values.zip);
    }, [values]);

    const handleInputChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        history.push('/parksearchresult');
    };

    return (
        <form onSubmit={handleSubmit} className="m-4">
            <h1 className="mb-4">Spot Filter Options</h1>

            <div>
                <label className="mb-4 mr-4">Name</label>
                <input
                    type="text"
                    placeholder="Highland park"
                    value={values.name}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4 mr-4">Tricks</label>
                <input
                    type="text"
                    placeholder="Alpha flip"
                    value={values.tricks}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4 mr-4">Price</label>
                <input
                    type="number"
                    placeholder={0}
                    value={values.price}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4 mr-4">Type of Skating *</label>
                <select
                    required
                    value={values.skating_type}
                    onChange={handleInputChange}
                >
                    <option value="">Select Experience</option>
                    {Skating_Type.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="mb-4 mr-4">Date & Time</label>
                <input
                    type="date"
                    value={values.date}
                    onChange={handleInputChange}
                />
                <input
                    type="time"
                    value={values.time}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="mb-4 mr-4">Zip Code</label>
                <input
                    type="text"
                    placeholder="75080"
                    value={values.zip}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Submit</button>
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
