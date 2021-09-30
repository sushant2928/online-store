import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CartPriceBar from '../../Components/Cart Price Bar/cart-price-bar.component'
import PageTitle from '../../Components/Page Title/page-title.component'
import ProductsList from '../../Components/Products List/productslist.component'
import './cart.style.css'
function Cart({cartItems, changeCategoryState, totalPrice}) {
    
    useEffect(() => {
        changeCategoryState(false) 
     }, [])
    

    
    return (
        <div className='cart-container'>
            <PageTitle title="Shopping Cart"/>
            {cartItems.length>0
             ? <div className="cart">
            <CartPriceBar totalPrice={totalPrice}/>
            <ProductsList products={cartItems} cart/>
            </div>
            : <p className="no-products-message">Your cart is empty. </p>}
          
            
        </div>
    )
    }

const mapStateToProps = ({cart}) => ({
    cartItems: cart.cartItems,
    totalPrice: cart.totalPrice
})

export default connect(mapStateToProps)(Cart)
