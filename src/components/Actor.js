import React, { useEffect, useState } from 'react';

import Cart from './Cart/Cart';
import Product from './Product/Product';

const Actor = () => {

    const[actors, setActors] = useState([]);
    const[cart,setCart] = useState([]);
    // const[name,setName] = useState([]);


    useEffect(()=>{

        fetch("fakedata.JSON")
        .then(res => res.json())
        .then(data =>setActors(data))
    },[])

    const handleToCart =(actor) =>{
        const newCart = [...cart,actor];
        setCart(newCart);
    }

    return (
        <div>
           <div className="row">
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

        
           <div className="col-md-3 border border-primary mt-2 rounded">
              <Cart cart={cart}></Cart>

           </div>
        </div>
        </div>
    );
};

export default Actor;