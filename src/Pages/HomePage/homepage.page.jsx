import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../Redux/Cart/cart.actions'
import ProductsList from '../../Components/Products List/productslist.component'
import SidePanel from '../../Components/Side Panel/side-panel.component'
import { getCartItems } from '../../firebase'
import './homepage.style.css'
const Homepage = ({sidePanel, changeCategoryState, data, currentUser, cartItems, addCartItem}) =>  {

   
   const [products, setProducts] = useState([...data])
   const getCategoryProducts =(categoryType) =>{
      const tempArray = [];
        data.forEach(element=>{
           if(element.type===categoryType){
            tempArray.push(element);
         }
         })
         if(tempArray.length===0)
         setProducts([...data])
         else
         setProducts([...tempArray]);     
      }
      useEffect(() => {
         changeCategoryState(true) 
         // getCartItems(currentUser.uid)
         console.log("homepage_currentUser", currentUser);
         if(currentUser){
         getCartItems(currentUser.uid).then(reuslt=>{ reuslt.forEach(cartItemToAdd=> {
            

            const  doesItemExist = cartItems.find(item=> item.id===cartItemToAdd.id)

            if(!doesItemExist){
                addCartItem(cartItemToAdd)
            }
         })



         })


      }
      }, [])
      useEffect(()=>{
        setProducts([...data])
      },[data])
      

   return(
        <div className="homepage" >
        
        <div className="main-content">
        {sidePanel && <SidePanel className="side-panel-container-with-margin" getCategory={getCategoryProducts}/>}
           <ProductsList products={products}/>
        </div>
           </div>
    )}

    const mapStateToProps = ({user, cart}) =>({
         currentUser: user.currentUser,
         cartItems: cart.cartItems
    })
    const mapDispatchToProps = dispatch =>({
       addCartItem: item=> dispatch(addCartItem(item))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
