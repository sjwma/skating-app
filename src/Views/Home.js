import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';
import FriendsCard from '../Components/FriendsCard';

const Home = () => {
    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
                <FiMenu />
                <h1>Home</h1>
                <BsPerson />
            </div>
            <InputGroup className="mb-4">
                <FormControl placeholder="Search" />
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
