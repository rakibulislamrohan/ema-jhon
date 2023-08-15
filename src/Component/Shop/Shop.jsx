import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = (props) => {

    const [product , setProduct] = useState ([]); 

    useEffect( () =>{
           fetch('products.json')
           .then( res => res.json())
           .then(data => setProduct(data))
    }, [])

    return (
        
      <div className="Shop-container">
         
       <div className="Product-container">
         <h2>Product Comming soon : {product.length} </h2>
       </div>
       
         
       <div className="card-container">
          <h4>Add to Card </h4>
       </div>

      </div>
    );
};

export default Shop;