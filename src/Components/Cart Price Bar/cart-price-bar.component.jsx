import React from 'react'
import {Link} from 'react-router-dom'
import './cart-price-bar.style.css'
function CartPriceBar({totalPrice}) {
    return (
        <div className="cart-price-bar">
                <p className="price">{`Total Price: Rs. ${totalPrice}`}</p>
                <Link className="checkout-button" to='/Checkout'>Checkout</Link>
            </div>
    )

    }
export default CartPriceBar
