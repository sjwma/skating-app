import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import FriendsCard from '../Components/FriendsCard';
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';

import { useHistory } from 'react-router-dom';

import p1 from '../Images/P3.jpg';
import p2 from '../Images/P4.jpg';
import p3 from '../Images/P5.jpg';

const Friendsearchresult = () => {
    let history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    };

    return (
        <div className="flex flex-col h-screen mx-4">
            <Header text="Friend Results" />

            <Container>
                <Row>
                    <Col sm={4}>
                        <FriendsCard
                            imgsrc={p1}
                            title="Oscar"
                            experience="Experience: Beginner"
                            Age="Age: 26"
                            TOS="Skateboarder"
                        />
                    </Col>
                    <Col sm={4}>
                        <FriendsCard
                            imgsrc={p2}
                            title="Sally"
                            experience="Experience: Intermediate"
                            Age="Age: 26"
                            TOS="Skateboarder"
                        />
                    </Col>
                    <Col sm={4}>
                        <FriendsCard
                            imgsrc={p3}
                            title="Angela"
                            experience="Experience: Expert"
                            Age="Age: 22"
                            TOS="Road Skater"
                        />
                    </Col>
                </Row>
            </Container>
            <Button
                variant="outline-primary"
                onClick={() => handleClick('/home')}
                className="mb-4"
            >
                Back
            </Button>
        </div>
    );
};

export default Friendsearchresult;
