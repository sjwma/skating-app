import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';

const Parksearchresult = () => {
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    };
    return (
        <div className="flex flex-col h-screen mx-4">
            <Header text="Park search result" />
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
            <Button
                variant="outline-primary"
                onClick={() => handleClick('/home')}
            >
                Back
            </Button>
        </div>
    );
};

export default Parksearchresult;
