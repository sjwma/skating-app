import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileCardHeader from './ProfileCardHeader';

const ProfileCard = ({ name, image, profileInfo, mode }) => {
    const [values, setValues] = useState({
        skating_type: profileInfo.skating_type,
        experience: profileInfo.experience,
        tricks: profileInfo.tricks,
        social: profileInfo.social,
        freq: profileInfo.freq,
    });

    return (
        <Container className="border-solid">
            <Row>
                <Col xs={8}>
                    <Image src={image} />
                </Col>
                <Col>
                    <ProfileCardHeader mode={mode} />
                </Col>
            </Row>
            <Row className="mt-4">
                <h3>{name}</h3>
                <div>Preferred Skating Type: {values.skating_type}</div>
                <div>Experience Level: {values.experience}</div>
                <div>Tricks Known: {values.tricks}</div>
                <div>Social Preference: {values.social}</div>
                <div>Skate Frequency: {values.freq}</div>
            </Row>
        </Container>
    );
};

export default ProfileCard;
