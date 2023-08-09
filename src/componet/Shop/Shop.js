import React, { useEffect, useState} from 'react';
import fakedata from '../../fakeData/products.JSON'
import './Shop.css'




const Shop = () => {
    const ddd = fakedata.slice(0,10)
    const [record, setrecord]= useState([ddd])
    
    
   useEffect(()=>{
    fetch(fakedata)
    .then(res=>res.json())
    .then(data=> setrecord(data))
    
   },[])
    return (
        <div className='shop-container'>
            <div className="productjs">
        
            {
                record.map(prod=> <div className='product-card'>
                    <div className="img">
                    <img src={prod.img} alt="" /></div>
                    <div className='producname' style={{textAlign:'center',color:'red',}}>{prod.name}</div>
                    <button className='btn'>click here</button>
                    <h6 style={{float:'center'}}>{prod.price}</h6>
                    
                    </div>)
                   
            }
            </div>
            
               <div className='products'>
              <h1>hello world</h1>
        </div>
        
        
        </div>
    );
};

export default Shop;