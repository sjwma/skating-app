import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import SpotCard from '../Components/SpotCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import s1 from '../Images/S1.jpg';
import s2 from '../Images/S2.jpg';
import s3 from '../Images/S3.jpg';

const Spotsearchresult = () => {
    let history = useHistory();
    const handleClick=(path)=>{
        history.push(path);
    }

    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
                <FiMenu />
                <h1>Spot search result</h1>
                <BsPerson />
            </div>

           
            <Container>
                <Row>
                    <Col sm={4}>
                        <SpotCard 
                        imgsrc={s2}
                        title="Mandalay Double Set Rail"
                        description="It was perfect for kids, and parents who want to walk simultaneously, with a good size pergola for shade.   Comparing to the average solitary adventure of only a slide and swings, this playground activities are bountiful and great."
                        
                        />

                    </Col>
                    <Col sm={4}>
                        <SpotCard
                         imgsrc={s3}
                         title="Blue Banks"
                         description="This is a great little playground!  My kid and I nicknamed it Parkour Park because it has a good set of equipment that invites jumping and climbing along with swings, slides, a couple spinners, and a toddler section."
                     
                        />

                    </Col>
                    <Col sm={4}>
                        <SpotCard 
                        imgsrc={s1}
                        title="Vivian Field Middle School"
                        description="Beautiful place. I always enjoy my walks here. Sometimes its quite busy with familys, fitness groups, photoshoots even but all in all very peaceful. It's big enough to find your own little spot if you like."
                    
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

export default Spotsearchresult;
