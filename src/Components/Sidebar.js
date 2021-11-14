import React from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiHome, BiSearch, BiGroup, BiHeart, BiExit } from 'react-icons/bi';

// TODO: animate page transitions
const Sidebar = ({ open, handleClose }) => {
    return (
        <>
            <Offcanvas show={open} onHide={handleClose} className="w-4/5">
                <Offcanvas.Header className="flex justify-center">
                    <Offcanvas.Title className="text-3xl">
                        Skating App
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/home"
                                className="flex text-3xl items-center text-gray-800 no-underline"
                            >
                                <BiHome className="mr-4" />
                                Home
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/searchpage"
                                className="flex text-3xl items-center text-gray-800 no-underline"
                            >
                                <BiSearch className="mr-4" />
                                Search
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/friendsearchresult"
                                className="flex text-3xl items-center text-gray-800 no-underline"
                            >
                                <BiGroup className="text-3xl mr-4" />
                                Friends
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/favorites"
                                className="flex text-3xl items-center text-gray-800 no-underline"
                            >
                                <BiHeart className="mr-4" />
                                Favorites
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="flex flex-row py-4">
                            <Link
                                to="/"
                                className="flex text-3xl items-center text-gray-800 no-underline"
                            >
                                <BiExit className="mr-4" />
                                Logout
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;
