import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const actor of cart){
        total = total + parseInt(actor.invitationCost);
    }
        // let arrayTotal = [];
        // for(const actor of cart){
        //     arrayTotal = arrayTotal + actor.name;
    
        // }

  
    return (
        <div>
            <h2>Detail Information</h2>
             <h6>Total added person :{props.cart.length}</h6>
             <h5>Total Costing: {total}</h5>
           {
               cart.map((actor)=>(

                <ul>
                    <li className="h5">
                        <p>name:{actor.name}</p>

                    </li>
                </ul>
               ))


           }
            
        </div>
    );
};

export default Cart;