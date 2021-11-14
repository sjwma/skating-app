import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import p1 from '../Images/P3.jpg';
import p2 from '../Images/P4.jpg';
import p3 from '../Images/P5.jpg';


const Parksearchresult = () => {
    let history = useHistory();
    const handleClick=(path)=>{
        history.push(path);
    }

    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
                <FiMenu />
                <h1>Park search result</h1>
                <BsPerson />
            </div>

           
            <Container>
                <Row>
                    <Col sm={4}>
                        <ParkCard 
                        imgsrc={p1}
                        title="Barney E Wood Skatepark"
                        description="This is my home park and I know it look pretty whack and it’s a pre fab junt. But honestly I have had some of the best skate sessions here and the people who come here in the morning are some of the coolest people around."
                   
                        />
                    </Col>
                    <Col sm={4}>
                        <ParkCard
                        imgsrc={p2}
                        title="The Colony Skate Park"
                        description="Smooth concrete and plasticoated elements.  Good place to learn and practice.  Free park part of Farmers Branch Recreational Center.  Not much shade so it does get hot mid-day.  Shade in morning and late afternoon."
                   
                        />
                    </Col>
                    <Col sm={4}>
                        <ParkCard 
                         imgsrc={p3}
                         title="Carpenter Skate Park"
                         description="Was really impressed with this little park. Visiting from out of town. Even though the space is small they did a good job of making the most of it. Definitely a street style park there at all different sizes of ledges and a few rails."
                    
                        />
                    </Col>
                </Row>
            </Container>
            <Button variant="outline-primary" onClick={()=>handleClick('/home')}>
                Back
            </Button>  
        </div>
    );
};

export default Parksearchresult;
