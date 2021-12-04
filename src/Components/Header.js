import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import Sidebar from './Sidebar';
import { useHistory } from 'react-router';
const Header = ({ text, isProfile, className }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleClose = () => setSidebarOpen(false);
    const handleShow = () => setSidebarOpen(true);

    let history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    };

    return (
        <div
            className={`flex flex-row justify-between items-center my-4 ${className}`}
        >
            <FiMenu className="text-3xl" onClick={handleShow} />
            <h1>{text}</h1>
            {/* Placeholder div for spacing */}
            {isProfile && <div />}
            {!isProfile && (
                <BsPerson
                    className="text-3xl"
                    onClick={() => handleClick('/profile')}
                />
            )}

            <Sidebar open={sidebarOpen} handleClose={handleClose} />
        </div>
    );
};

export default Header;
