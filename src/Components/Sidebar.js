import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { BiHome, BiSearch, BiGroup, BiHeart, BiExit } from 'react-icons/bi';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListGroup as="ul">
                <ListGroup.Item as="li" className="flex flex-row">
                    <BiHome className="text-3xl" />
                    Home
                </ListGroup.Item>
                <ListGroup.Item as="li" className="flex flex-row">
                    <BiSearch className="text-3xl" />
                    Search
                </ListGroup.Item>
                <ListGroup.Item as="li" className="flex flex-row">
                    <BiGroup className="text-3xl" />
                    Friends
                </ListGroup.Item>
                <ListGroup.Item as="li" className="flex flex-row">
                    <BiHeart className="text-3xl" />
                    Favorites
                </ListGroup.Item>
                <ListGroup.Item as="li" className="flex flex-row">
                    <BiExit className="text-3xl" />
                    Logout
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default Sidebar;
