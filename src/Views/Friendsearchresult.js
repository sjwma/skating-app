import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import FriendsCard from '../Components/FriendsCard';
import Button from 'react-bootstrap/Button';

const Friendsearchresult = () => {

    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
                <FiMenu />
                <h1>Friend search result</h1>
                <BsPerson />
            </div>


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
            <Button variant="outline-primary" href='/home'>
                Back
            </Button>  
        </div>
    );
};

export default Friendsearchresult;
