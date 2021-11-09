import React from 'react';
import '../css/friend-card-style.css';


const Card = props => {

return(
    <div className="card text-center shadow">
        <div className = "overflow">
            <img src={props.imgsrc} alt = "Image 1" className="card-img-top friend-img"/>
        </div>
    <div className = "card-body text-dark friend-body">
        <h4 className = "card-title">
            {props.title}
        </h4>
        <h5 className = "card-text text-secondary friend">
            {props.experience}
        </h5>
        <h5 className = "card-text text-secondary friend">
            {props.Age}
        </h5>
        <h5 className = "card-text text-secondary friend">
            {props.TOS}
        </h5>
        <a href = "#" className = "btn btn-outline-success"> Details</a> 
        </div>   
    </div>
);
}
export default Card;