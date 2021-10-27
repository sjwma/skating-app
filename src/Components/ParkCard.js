import React from 'react';
import { Card } from 'react-bootstrap';
import Image from "../Images/spark1.jpg";
const ParkCard = () => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={Image} width = '400' height = '400' />
            <Card.Body>
                <Card.Text>Generic park description</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ParkCard;
