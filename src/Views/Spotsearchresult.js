import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import SpotCard from '../Components/SpotCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

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
                        <SpotCard />
                    </Col>
                    <Col sm={4}>
                        <SpotCard />
                    </Col>
                    <Col sm={4}>
                        <SpotCard />
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
