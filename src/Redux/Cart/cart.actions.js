export const ADD_CART_ITEM = "ADD_CART_ITEM"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const DELETE_CART_ITEM = "DELETE_CART_ITEM"

export const addCartItem = item =>({
    type: ADD_CART_ITEM,
    payload: item
})
export const removeCartItem = item =>({
    type: REMOVE_CART_ITEM,
    payload: item
})
export const deleteCartItem = item =>({
    type: DELETE_CART_ITEM,
    payload: item
})

