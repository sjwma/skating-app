import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import Sidebar from './Sidebar';

const Header = ({ text }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleClose = () => setSidebarOpen(false);
    const handleShow = () => setSidebarOpen(true);

    return (
        <div className="flex flex-row justify-between items-center my-4">
            <FiMenu className="text-3xl" onClick={handleShow} />
            <h1>{text}</h1>
            <BsPerson className="text-3xl" />
            <Sidebar open={sidebarOpen} handleClose={handleClose} />
        </div>
    );
};

export default Header;
