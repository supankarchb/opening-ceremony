import React, { useEffect, useState } from 'react';

import Cart from './Cart/Cart';
import Product from './Product/Product';

const Actor = () => {

// using useState
    const[actors, setActors] = useState([]);
    const[cart,setCart] = useState([]);

// using useEffect
    useEffect(()=>{

        fetch("fakedata.JSON")
        .then(res => res.json())
        .then(data =>setActors(data))
    },[])
// using spred operator
    const handleToCart =(actor) =>{
        const newCart = [...cart,actor];
        setCart(newCart);
    }

    return (
        <div>
           <div className="row bg-light">
               <div className="col-md-9">
                   <div className="row">
                       {
                           actors.map(actor=> <Product actor={actor}
                            key={actor.key}
                           handleToCart={handleToCart}
                               >
                           </Product> )
                       }
                   </div>
               </div>
           <div className="col-md-3 border border-dark mt-2 rounded">
              <Cart cart={cart}></Cart>
           </div>
        </div>
        </div>
    );
};

export default Actor;