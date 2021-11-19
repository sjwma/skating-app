import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileCardHeader from './ProfileCardHeader';

const ProfileCard = ({ name, image, mode }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={image} />
                </Col>
                <Col>
                    {/* + Friend, Unfriend, Chat, Favorite */}
                    <ProfileCardHeader mode={mode} />
                </Col>
            </Row>
            <Row></Row>
        </Container>
    );
};

export default ProfileCard;
