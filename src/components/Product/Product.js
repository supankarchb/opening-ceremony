import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const{name,age,invitationCost,profession} = props.actor;
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return (
       <div className="col-md-4">

        <div className="card-md-3 g-2 m-2">
        <div className="col">
          <div className="card border-dark">
            <img src={props.actor.img} className="card-img-top rounded-circle p-3" alt="..."/>
            <div className="card-body">
              <p className="card-text"><b>Name:</b>{name}</p>
              <p className="card-text"><b>Profession:</b> {profession}</p>
              <p className="card-text"><b>Age:</b> {age}</p>
              <p className="card-text"><b>Invaitation-Cost:</b> {invitationCost}</p>
             
              <p className="card-text"><b>About:</b> {age}</p>
              <button className="rounded-pill border border-dark p-2 bg-primary text-white" onClick={()=>props.handleToCart(props.actor)}>{element} Add for invite</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};


export default Product;