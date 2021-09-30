export const getTotalPriceAfterAdding = (previousTotalPrice, newItem) =>{
    return Math.round((previousTotalPrice + newItem.price + Number.EPSILON) * 100) / 100
}
export const getTotalPriceAfterRemoving = (previousTotalPrice, newItem, remove=false) =>{
    if(remove){
    return Math.round((previousTotalPrice-newItem.quantity * newItem.price + Number.EPSILON) * 100) / 100
    }
    return Math.round((previousTotalPrice - newItem.price + Number.EPSILON) * 100) / 100
}
export const addCartItem = (cartItems, cartItemToAdd)=>{
    const  doesItemExist = cartItems.find(item=> item.id===cartItemToAdd.id)
    if(doesItemExist){
        return cartItems.map(item=> {
            if(item.id===cartItemToAdd.id)
                return {...item, quantity: item.quantity+1  }
            return item
        })
    }
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeCartItem = (cartItems, cartItemToRemove)=>{
    let temp = []
    for(let item of cartItems){
        if(item.id===cartItemToRemove.id){
            item = {...item, quantity: item.quantity-1}
            if(item.quantity>0)
            temp.push(item)
        }
        else
        temp.push(item)
    }
    return temp;
    
}
export const deleteCartItem = (cartItems, cartItemToRemove)=>{
    return cartItems.filter(item=> item.id!==cartItemToRemove.id)
}
