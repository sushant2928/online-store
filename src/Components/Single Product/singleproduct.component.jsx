import { useState } from 'react';
import { connect } from 'react-redux';
import { addCartItem, removeCartItem, deleteCartItem } from '../../Redux/Cart/cart.actions';
import QuantityController from '../Quantity Controller/quantity-controller.component';
import './singleproduct.style.css';

const SingleProduct = ({product, addItemToCart, removeItemFromCart, deleteItemFromCart, cart}) =>{
    const quantityChanged = (type) =>{
        if(type===0)
        addItemToCart(product) 
        else if(type===1)
        removeItemFromCart(product)
        else if(type===2)
        deleteItemFromCart(product)
    }
// const isCartItem = (product) =>{
//     if(product.quantity && product.quantity>0){
//         return true;
//     }
//     return false;
// }
 return (  <div className="singleProduct">
        <img className="productImage" src={require(`../../assests/images/${product.filename}`).default} alt={product.description} />
        <div className="productDetails">
        <h3 className="productPrice">Rs. {product.price}</h3>
        <p className="productName">{product.title}</p>
        {cart ? <QuantityController quantityChanged = {quantityChanged} productQuantity={product.quantity}/>
        : <button className="add-to-cart-button" onClick={()=>quantityChanged(0)}>Add To Cart</button>}
        
        </div>
        
    </div>
 )
}

const mapDispatchToProps = dispatch =>({
    addItemToCart: cartItem=> dispatch(addCartItem(cartItem)),
    removeItemFromCart: cartItem=> dispatch(removeCartItem(cartItem)),
    deleteItemFromCart: cartItem=> dispatch(deleteCartItem(cartItem))
})

export default connect(null, mapDispatchToProps)(SingleProduct);