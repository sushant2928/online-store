import  { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, addDoc, setDoc, updateDoc, getDoc} from 'firebase/firestore/lite';
import products from './assests/products.json'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD04lyhaj4p6yi0y1RNp0De_Vmu86LnJe0",
  authDomain: "e-commerce-7a7e4.firebaseapp.com",
  projectId: "e-commerce-7a7e4",
  storageBucket: "e-commerce-7a7e4.appspot.com",
  messagingSenderId: "795699225977",
  appId: "1:795699225977:web:a05172a29a58ef350cbba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


export const SignUp= (email, password, displayName)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      updateProfile(userCredentials.user, {
        displayName: displayName
      })
      .then(() => {
        // Profile updated!
    const {uid, displayName, email} = userCredentials.user
    console.log(typeof user);
    setDoc(doc(db, "users", uid), {
      displayName,
      email
    });
        LogIn(email, password)
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        alert(error.message)
      });
    })
    
}


export const LogIn = (email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    return userCredential.user
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(typeof errorMessage);
    alert(errorMessage)
    
//   });

})}


export const LogOut = () =>{
  signOut(auth)
}


export async function getAllProducts(){
  try {
    const PRODUCTS_DB = collection(db, 'products');
    // const productsSnapShot = await getDocs(PRODUCTS_DB);
    const productsSnapShot = await getDocs(PRODUCTS_DB);
    productsSnapShot.docs.forEach(doc => {
      products.push({...doc.data(), id:doc.id})  
        })
        return products
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export async function getAllCategories(){
    try {
        const CATEGORIES_DB = collection(db, 'categories');
        const categoriesSnapShot = await getDocs(CATEGORIES_DB);
  
  const categories = categoriesSnapShot.docs.map(doc => {
    return doc.data()});
    // const categories = categoriesSnapShot.docs.map(doc => ({id:doc.id,...doc.data()}));
    return categories
  
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export function saveCartItems(cartItems, currentUser_uid){
      try {
        // db.collection('users').doc(currentUser_uid).update({cartItems}).then(result=>console.log("firebase_saveCartItems", result))
        const userRef = doc(db, "users", currentUser_uid)
        updateDoc(userRef, {cartItems})
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    export async function getCartItems(currentUser_uid){
      const docRef = doc(db, "users", currentUser_uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists)
      return docSnap.data().cartItems
    }



// export function addProductsAndCategories(){
//     try {
//              products.forEach(product=>{
//                  const docRef = addDoc(collection(db, "products"), product);
//                  console.log("Document written with ID: ", docRef.id);
//              })
    
//             //  categories.forEach(category=>{
//             //      const docRef = addDoc(collection(db, "categories"), category);
//             //      console.log("Document written with ID: ", docRef.id);
//             //  })
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }