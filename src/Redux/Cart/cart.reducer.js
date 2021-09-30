import * as actions from './cart.actions'
import * as utils from './cart.utils'

const INITIAL_STATE = {
    cartItems : [],
    totalPrice: 0,
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actions.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: utils.addCartItem(state.cartItems, action.payload),
                totalPrice: utils.getTotalPriceAfterAdding(state.totalPrice, action.payload)
            }
            case actions.REMOVE_CART_ITEM:
                return{
                    ...state,
                    cartItems: utils.removeCartItem(state.cartItems, action.payload),
                    totalPrice: utils.getTotalPriceAfterRemoving(state.totalPrice, action.payload)
                }
            case actions.DELETE_CART_ITEM:
                return{
                    ...state,
                    cartItems: utils.deleteCartItem(state.cartItems, action.payload),
                    totalPrice: utils.getTotalPriceAfterRemoving(state.totalPrice, action.payload, true)
                }
            default:
                return state
    }
}
export default cartReducer