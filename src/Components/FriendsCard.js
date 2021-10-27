import React from 'react';
import { Card } from 'react-bootstrap';
import Image from "../Images/P1.jpg";
const FriendsCard = () => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={Image} width = '400' height = '400' />
            <Card.Body>
                <Card.Text>Generic friend description</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FriendsCard;