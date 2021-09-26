import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const actor of cart){
        total = total + parseInt(actor.invitationCost);
    }
        let arrayTotal = [];
        for(const actor of cart){
            arrayTotal = arrayTotal + actor.name;
    
        }

  
    return (
        <div>
             <h6>Added added person :{props.cart.length}</h6>
             <h5>Total Costing: {total}</h5>
             <h5>Adding Person Name :<li>{arrayTotal}</li></h5>
            
        </div>
    );
};

export default Cart;