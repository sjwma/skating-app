import Button from 'react-bootstrap/Button';
import React from 'react';
import { useHistory } from "react-router-dom";



// TODO: Figure out how to use the React Router <Link /> element instead of href in button
const Main = () => {
    let history = useHistory();
    const handleClick=(path)=>{
        history.push(path);
    }

    return (



        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="my-4">Skate</h1>
            <Button
                variant="outline-primary"
                size="lg"
                href="/login"
                className="mb-4"
            >
                Login
            </Button>
            <Button
            
            variant="outline-primary" size="lg"
            onClick={()=>handleClick('/signup')}>
             {/* href="/signup" */}
                Sign Up
            </Button>
        </div>
    );
};

export default Main;
