import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';
import FriendsCard from '../Components/FriendsCard';
import Button from 'react-bootstrap/Button';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleClose = () => setSidebarOpen(false);
    const handleShow = () => setSidebarOpen(true);

    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center my-4">
                <FiMenu className="text-3xl" onClick={handleShow} />
                <h1>Home</h1>
                <BsPerson className="text-3xl" />
            </div>

            <InputGroup className="mb-4">
                <FormControl placeholder="Search" />
                <Button variant="text" href="/searchpage">
                    Search
                </Button>
                <InputGroup.Text>
                    <BsSearch />
                </InputGroup.Text>
            </InputGroup>

            <h3 className="mb-4">Nearby Parks</h3>
            <Container>
                <Row>
                    <Col sm={4}>
                        <ParkCard />
                    </Col>
                    <Col sm={4}>
                        <ParkCard />
                    </Col>
                    <Col sm={4}>
                        <ParkCard />
                    </Col>
                </Row>
            </Container>
            <h3 className="mb-4">Nearby People</h3>
            <Container>
                <Row>
                    <Col sm={4}>
                        <FriendsCard />
                    </Col>
                    <Col sm={4}>
                        <FriendsCard />
                    </Col>
                    <Col sm={4}>
                        <FriendsCard />
                    </Col>
                </Row>
            </Container>
            <Sidebar open={sidebarOpen} handleClose={handleClose} />
        </div>
    );
};

export default Home;
