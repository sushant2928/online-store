import Homepage from "./Pages/HomePage/homepage.page";
import Cart from './Pages/Cart/cart.page'
import './App.css'
import {  useEffect, useState } from "react";
import NavigationBar from "./Components/Navigation Bar/navigation-bar.component";
import { Route, Switch } from "react-router";
import ContactUs from "./Pages/Contact Us/contact-us.page";
import Checkout from "./Pages/Checkout/checkout.page";
import Account from "./Pages/My Account/account.page";
import PageNotFound from "./Pages/Page Not Found/page-not-found.page";
import {getAllProducts} from './firebase'
import Authentication from "./Pages/Authentication/authentication.page";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";
import {setCurrentUser, removeCurrentUser} from "./Redux/User/user.actions"
import ThanksForOrdering from "./Pages/Thanks For Ordering/thanks-for-ordering.page";


function App({setCurrentUser}) {
  
  const [data, setData] = useState([])
  // const [cartItems, setCartItems] = useState([])
  // const [totalPrice, setTotalPrice] = useState(0)
  const [sidePanel, setsidePanel] = useState(false)
  const [willCategoryShow, setWillCategoryShow] = useState(false)
  // const [currentUser, setCurrentUser] = useState()
  // const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  const changeCategoryState = (categoryState=false) =>{
    setWillCategoryShow(categoryState)
  }
  
  

  // const updateCart = (product,quantity)=>{
  //   const tempCartItems = [...cartItems]
  //   tempCartItems.forEach(element=>{ 
  //       if(element.id===product.id){
  //           element.quantity=quantity;
  //       }        
  //   })  
  //   setCartItems([...tempCartItems])
  // }

  // const updatePrice = (price)=>{
  //   setTotalPrice(price)
  // }

    const changeSidePanelState = () =>{
      setsidePanel(!sidePanel)
   }
   const hideSidePanel = ()=>{
      if(sidePanel)
      setsidePanel(false)
   }
   useEffect(() => {
    getAllProducts().then(result => setData([...result]))
    
    // getAllCategories()    
 }, [])


 //  useEffect(()=>{
//       // console.log("data array",data);
//       setCartItems([...data])
//       console.log("data", data);
  
//  }, [data])


const productsWithCartItems = (productList, cartItems)=>{
  let tempProductList = []
  tempProductList.push(productList.forEach(product => {
    if(cartItems.find(item=> product.id===item.id))
    return product 
  }))
  console.log("productsWithCartItems",[...productList, ...cartItems]);
  tempProductList =  [...tempProductList, ...cartItems]
  return tempProductList;
}

 onAuthStateChanged(getAuth(), (user) => {
    
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    setCurrentUser(user)
    
    // ...
  } else {
    setCurrentUser()
    
    // User is signed out
    // ...
  }
});

  return (
    <div className="App" onClick={()=>{hideSidePanel()}}>
    
    <NavigationBar changeSidePanelState={changeSidePanelState} willCategoryShow={willCategoryShow}/>
    <div className="content">
    <Switch>
    <Route 
    path='/' 
    exact 
    render={()=> <Homepage sidePanel={sidePanel} changeCategoryState={changeCategoryState} data={data}/> }
    />
    <Route path='/Cart'  render={()=><Cart changeCategoryState={changeCategoryState}/> }/>
    <Route path='/Checkout'  render={()=><Checkout changeCategoryState={changeCategoryState}/>} />
    <Route path='/ContactUs'  render={()=><ContactUs changeCategoryState={changeCategoryState}/>} />
    <Route path='/Account'  render={()=><Account changeCategoryState={changeCategoryState}/>} />
    <Route path='/Authentication' render={()=><Authentication/>}/>
    <Route path='/ThanksForOrdering' render={()=><ThanksForOrdering/>}/>
    <Route render={()=><PageNotFound changeCategoryState={changeCategoryState}/>}/>
    </Switch>
 {/* <Authentication isLoaderVisible={isLoaderVisible} showLoader={showLoader}/>} */}
  </div>
    </div>
  );
}


const mapDispatchToProps = dispatch=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
