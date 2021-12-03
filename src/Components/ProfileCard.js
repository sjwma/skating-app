import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileCardHeader from './ProfileCardHeader';

const ProfileCard = ({ name, bodyText, image, mode }) => {
    return (
        <Container className="border-solid">
            <Row>
                <Col xs={8}>
                    <Image src={image} />
                </Col>
                <Col>
                    {/* + Friend, Unfriend, Chat, Favorite */}
                    <ProfileCardHeader mode={mode} />
                </Col>
            </Row>
            <Row className="mt-4">
                <h3>{name}</h3>
                <div>{bodyText}</div>
            </Row>
        </Container>
    );
};

export default ProfileCard;
