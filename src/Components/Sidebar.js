import React from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiHome, BiSearch, BiGroup, BiHeart, BiExit } from 'react-icons/bi';

const Sidebar = ({ open, handleClose }) => {
    return (
        <>
            <Offcanvas show={open} onHide={handleClose} className="w-4/5">
                <Offcanvas.Body>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/home"
                                className="flex text-3xl items-center"
                            >
                                <BiHome className="mr-4" />
                                Home
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <div className="flex text-3xl items-center">
                                <BiSearch className="mr-4" />
                                Search
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <div className="flex text-3xl items-center">
                                <BiGroup className="text-3xl mr-4" />
                                Friends
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <div className="flex text-3xl items-center">
                                <BiHeart className="mr-4" />
                                Favorites
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <div className="flex text-3xl items-center">
                                <BiExit className="mr-4" />
                                Logout
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;
