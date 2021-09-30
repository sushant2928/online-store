import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PageTitle from '../../Components/Page Title/page-title.component'
import './checkout.style.css'
import { saveCartItems } from '../../firebase'
import { Redirect } from 'react-router'

import {
    PayPalScriptProvider,
    PayPalButtons,
} from "@paypal/react-paypal-js";

function Checkout({changeCategoryState, cartItems, totalPrice, currentUser, history}) {
    
    const [paymentButtonDisabled, setPaymentButtonDisabled] = useState(true)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState()
    const [orderCompleted, setOrderCompleted] = useState(false)
    
    useEffect(() => {
        if(name && address && pincode)
        setPaymentButtonDisabled(false)
        else setPaymentButtonDisabled(true)
     }, [name, address, pincode])

    useEffect(() => {
        changeCategoryState(false) 
        console.log(cartItems, totalPrice);
     }, [])

     const proceedToPayment = () =>{
        saveCartItems(cartItems, currentUser.uid)
        setOrderCompleted(true)
     }
     

    return (
        <div>
        {console.log('checkout_currentuser', currentUser)}
        <div className="checkout">
            <PageTitle title="Checkout"/>
            <form onSubmit={e=>e.preventDefault()} className="address-form">
            <h2 className="form-title">Delivery Adress</h2>
          <label className="form-label">Name*</label>
          <input className="form-input" type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
          <label className="form-label">Delivery Address*</label>
          <input className="form-input" type="text" placeholder="Enter Delivery  Address" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
          <label className="form-label">Pincode*</label>
          <input className="form-input" type="number" placeholder="Enter Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} required/>
          <label className="form-label">Total Amount</label>
          <input className="form-input" placeholder={totalPrice} disabled/>
          {/* <button className="form-button"  onClick={()=>{proceedToPayment()}}>{`Proceed To Payment ( Rs. ${totalPrice} )` }</button> */}

          
<PayPalScriptProvider options={{ "client-id": "test" }}>
   <PayPalButtons
       style={{ layout: "horizontal" }}
       createOrder={(data, actions) => {
           return actions.order.create({
               purchase_units: [
                   {
                       amount: {
                           value: totalPrice,
                       },
                       currency:"INR"
                   },
               ],
           });
       }}
       onApprove={(data, actions)=>{proceedToPayment(data, actions)} }
       disabled={paymentButtonDisabled}/>
</PayPalScriptProvider>

        </form>        
        <div className="checkout-payment"></div>
        </div>
        {orderCompleted && <Redirect to='/ThanksForOrdering' />}
        </div>
    )
}
const mapStateToProps = ({user, cart})=>({
    cartItems: cart.cartItems,
    totalPrice: cart.totalPrice,
    currentUser: user.currentUser
  })
  

export default connect(mapStateToProps)(Checkout)
