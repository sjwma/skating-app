import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Card from '../Components/ParkCard';
import FriendsCard from '../Components/FriendsCard';
import image1 from '../Images/spark1.jpg';
import image2 from '../Images/spark2.jpg';
import image3 from '../Images/spark3.jpg';
import p1 from '../Images/P3.jpg';
import p2 from '../Images/P4.jpg';
import p3 from '../Images/P5.jpg';

import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div className="flex flex-col h-screen mx-4">
            <Header text="Home" />

            <InputGroup className="mb-4">
                <FormControl placeholder="Search" />
                <Button variant="text" href="/skating-app/searchpage/">
                    Search
                </Button>
                <InputGroup.Text>
                    <BsSearch />
                </InputGroup.Text>
            </InputGroup>
            <h4> Nearby Parks</h4>
            <div className="conatainer-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            imgsrc={image1}
                            title="Barney E Wood Skatepark"
                            description="This is my home park and I know it look pretty whack and it’s a pre fab junt. But honestly I have had some of the best skate sessions here and the people who come here in the morning are some of the coolest people around."
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imgsrc={image2}
                            title="The Colony Skate Park"
                            description="Smooth concrete and plasticoated elements.  Good place to learn and practice.  Free park part of Farmers Branch Recreational Center.  Not much shade so it does get hot mid-day.  Shade in morning and late afternoon."
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            imgsrc={image3}
                            title="Carpenter Skate Park"
                            description="Was really impressed with this little park. Visiting from out of town. Even though the space is small they did a good job of making the most of it. Definitely a street style park there at all different sizes of ledges and a few rails."
                        />
                    </div>
                </div>
            </div>
            <h4> Nearby People</h4>
            <div className="conatainer-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <FriendsCard
                            imgsrc={p1}
                            title="Oscar"
                            experience="Experience: Beginner"
                            Age="Age: 26"
                            TOS="Skateboarder"
                        />
                    </div>
                    <div className="col-md-4">
                        <FriendsCard
                            imgsrc={p2}
                            title="Sally"
                            experience="Experience: Intermediate"
                            Age="Age: 26"
                            TOS="Skateboarder"
                        />
                    </div>
                    <div className="col-md-4">
                        <FriendsCard
                            imgsrc={p3}
                            title="Angela"
                            experience="Experience: Expert"
                            Age="Age: 22"
                            TOS="Road Skater"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
