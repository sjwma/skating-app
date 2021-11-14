import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import Card from '../Components/ParkCard';
import SpotCard from '../Components/SpotCard';
import FriendsCard from '../Components/FriendsCard';
import image1 from '../Images/spark1.jpg';
import image2 from '../Images/spark2.jpg';
import image3 from '../Images/spark3.jpg';
import p1 from '../Images/P3.jpg';
import p2 from '../Images/P4.jpg';
import p3 from '../Images/P5.jpg';

import s1 from '../Images/S1.jpg';
import s2 from '../Images/S2.jpg';
import s3 from '../Images/S3.jpg';

import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header';

const Home = () => {
    let history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    };

    return (
        <div className="flex flex-col h-screen mx-4">
            <Header text="Home" />

            <InputGroup className="mb-4">
                <Button
                    variant="text"
                    onClick={() => handleClick('/searchpage')}
                >
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

            <h4> Nearby Spots</h4>
            <div className="conatainer-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <SpotCard
                            imgsrc={s1}
                            title="Vivian Field Middle School"
                            description="Beautiful place. I always enjoy my walks here. Sometimes its quite busy with familys, fitness groups, photoshoots even but all in all very peaceful. It's big enough to find your own little spot if you like."
                        />
                    </div>

                    <div className="col-md-4">
                        <SpotCard
                            imgsrc={s2}
                            title="Mandalay Double Set Rail"
                            description="It was perfect for kids, and parents who want to walk simultaneously, with a good size pergola for shade.   Comparing to the average solitary adventure of only a slide and swings, this playground activities are bountiful and great."
                        />
                    </div>

                    <div className="col-md-4">
                        <SpotCard
                            imgsrc={s3}
                            title="Blue Banks"
                            description="This is a great little playground!  My kid and I nicknamed it Parkour Park because it has a good set of equipment that invites jumping and climbing along with swings, slides, a couple spinners, and a toddler section."
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
