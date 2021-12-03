import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import ProfileCard from '../Components/ProfileCard';

import person from '../Images/P3.jpg';

const placeholderText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mi et felis convallis lobortis non vitae arcu. Vivamus nec est ac tortor ornare lacinia sed quis dui. Suspendisse potenti. Aenean dapibus velit sed ipsum interdum, ut tincidunt ex rutrum. Fusce pellentesque quis enim nec maximus. Sed auctor est odio. Maecenas nec nunc fermentum, laoreet dui at, gravida nunc. Vestibulum odio ligula, condimentum ac lorem vel, ultricies lobortis ex. Curabitur nec eros bibendum ante dignissim ultrices. Vestibulum feugiat ex porttitor porttitor dignissim. Sed laoreet nunc porta lacus varius, nec scelerisque diam ultrices. Etiam ultrices blandit urna.';

// Input: isProfile (true if on Profile page, false for displaying other users)
const Profile = ({}) => {
    const [values, setValues] = useState({
        name: 'Bob',
        profile_text: placeholderText,
    });

    // Get relevant values from localstorage, uses OR to prevent a null return value
    useEffect(() => {
        setValues({ name: localStorage.getItem('name') || values.name });
        setValues({
            profile_text:
                localStorage.getItem('profile_text') || values.profile_text,
        });
    }, []);

    return (
        <div className="mx-2 mb-8">
            <Header isProfile={true} text="My Profile" className="px-2" />
            <ProfileCard
                name={values.name}
                bodyText={placeholderText}
                image={person}
                mode="profile"
            />
        </div>
    );
};

export default Profile;
