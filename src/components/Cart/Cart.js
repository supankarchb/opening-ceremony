import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const actor of cart){
        total = total + parseInt(actor.invitationCost);
    }
    // cart details
    return (
        <div>
            <h4 className="text-primary">Details Information</h4>
             <h6>Total added person : {props.cart.length}</h6>
             <h6>Total Costing : {total} TK</h6>
             <h4 className="text-primary">Added person name </h4>
           {
               cart.map((actor)=>(

                <ul>
                    <li>
                       
                        <h5>{actor.name}</h5>

                    </li>
                </ul>
               ))
           } 
        </div>
    );
};

export default Cart;