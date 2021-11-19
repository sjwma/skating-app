import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import ProfileCard from '../Components/ProfileCard';

import person from '../Images/P3.jpg';

// Input: isProfile (true if on Profile page, false for displaying other users)
const Profile = ({}) => {
    const [values, setValues] = useState({
        name: 'Bob',
    });

    // Get relevant values from localstorage
    useEffect(() => {
        setValues({ name: localStorage.getItem('name') });
    }, []);

    return (
        <div className="mx-4">
            <Header isProfile={true} />
            <ProfileCard name={values.name} image={person} />
        </div>
    );
};

export default Profile;
