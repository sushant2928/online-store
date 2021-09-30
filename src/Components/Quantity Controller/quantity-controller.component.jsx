import { useEffect, useState } from 'react';
import './quantity-controller.style.css'
const QuantityController = ({quantityChanged, productQuantity=0}) =>{

    const [quantity, setQuantity] = useState(productQuantity);
    const increaseQuantity = () =>{
        setQuantity(quantity+1)
        quantityChanged(0)
    }
    const decreaseQuantity = ()=>{
        if(quantity===0)
        return
        setQuantity(quantity-1);
        quantityChanged(1)
    }
    const deleteProduct = ()=>{
        quantityChanged(2)
        
    }
    
return(
<div className="quantityController">
            <button className="negativeButton" onClick={()=>decreaseQuantity()}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="positiveButton" onClick={()=>increaseQuantity()}>+</button>
            <button className="deleteButton" onClick={()=>deleteProduct()}>x</button>
        </div>
)}
export default QuantityController