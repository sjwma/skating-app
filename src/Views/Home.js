import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';
import FriendsCard from '../Components/FriendsCard';
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div className="flex flex-col h-screen mx-4">
            <Header text="Home" />

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
        </div>
    );
};

export default Home;
