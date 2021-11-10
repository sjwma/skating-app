import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from '../Components/ParkCard';
import Header from '../Components/Header';
import image1 from '../Images/spark1.jpg';
import image2 from '../Images/spark2.jpg';
import image3 from '../Images/spark3.jpg';
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
                        <Card
                            imgsrc={image1}
                            title="Barney E Wood Skatepark"
                            description="This is my home park and I know it look pretty whack and it’s a pre fab junt. But honestly I have had some of the best skate sessions here and the people who come here in the morning are some of the coolest people around."
                        />
                    </Col>
                    <Col sm={4}>
                        <Card
                            imgsrc={image2}
                            title="The Colony Skate Park"
                            description="Smooth concrete and plasticoated elements.  Good place to learn and practice.  Free park part of Farmers Branch Recreational Center.  Not much shade so it does get hot mid-day.  Shade in morning and late afternoon."
                        />
                    </Col>
                    <Col sm={4}>
                        <Card
                            imgsrc={image3}
                            title="Carpenter Skate Park"
                            description="Was really impressed with this little park. Visiting from out of town. Even though the space is small they did a good job of making the most of it. Definitely a street style park there at all different sizes of ledges and a few rails."
                        />
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
