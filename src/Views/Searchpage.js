import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const Searchpage = () => {
    
    let history = useHistory();
    const handleClick=(path)=>{
        history.push(path);
    }
    return (



        <div className="flex flex-col items-center justify-center h-screen mx-8">
            <h1 className="mb-4">What are you looking for?</h1>

            <Button
                variant="outline-primary"
                onClick={()=>handleClick('/friendfilter')}>
                {/* href="/friendfilter" */}
                {/* className="mb-4" */}
            
                Friends
            </Button>


            <Button variant="outline-primary" 
             onClick={()=>handleClick('/parkfilter')}>
            {/* href="/parkfilter"> */}
                Parks
            </Button>

            <Button variant="outline-primary" 
             onClick={()=>handleClick('/spotfilter')}>
            {/* href="/parkfilter"> */}
                Spots
            </Button>

        </div>
    );
};

export default Searchpage;
