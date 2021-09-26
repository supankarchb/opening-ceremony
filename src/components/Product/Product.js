import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    //use disstructering
    const{name,age,invitationCost,profession,country} = props.actor;

    // using fontAwesome Icon
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return (
       <div className="col-md-4">

        <div className="card-md-3 g-2 m-2">
        <div className="col">
          <div className="card border-dark">
            <img src={props.actor.img} className="card-img-top rounded-circle p-3" alt="..."/>
            <div className="card-body">
              <h6 className="card-text"><b>Name :</b> {name}</h6>
              <p className="card-text"><small><b>Profession : {profession}</b></small></p>
              <p className="card-text"><small><b>Age : {age}</b></small></p>
              <p className="card-text"><small><b>Country : {country}</b></small></p>
              <p className="card-text"><small><b>Invaitation-Cost : {invitationCost} TK</b></small></p>
              <button className="rounded-pill border border-dark p-2 bg-primary text-white" onClick={()=>props.handleToCart(props.actor)}>{element} Add for invite</button>
            </div>
          </div>
        </div>
        </div>
       </div>
    );
};


export default Product;