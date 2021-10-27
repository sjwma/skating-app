import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import ParkCard from '../Components/ParkCard';

const Home = () => {
    return (
        <div className="flex flex-col h-screen mx-4">
            <div className="flex flex-row justify-between items-center mt-4 mb-4">
                <FiMenu />
                <h1>Home</h1>
                <BsPerson />
            </div>
            <InputGroup className="mb-4">
                <FormControl placeholder="Search" />
                <InputGroup.Text>
                    <BsSearch />
                </InputGroup.Text>
            </InputGroup>
            <h3 className="mb-4">Nearby Parks</h3>
            <div>
                <ParkCard />
                <ParkCard />
            </div>
        </div>
    );
};

export default Home;
