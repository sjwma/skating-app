import React from 'react';
import { Card } from 'react-bootstrap';

const ParkCard = () => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src="images" />
            <Card.Body>
                <Card.Text>Generic park description</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ParkCard;
