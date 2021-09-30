import * as actions from './user.actions';
const INITITAL_STATE = {
    currentUser: null,
}
const userReducer = (state= INITITAL_STATE, action) => {
    switch(action.type){
        case actions.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
        case actions.REMOVE_CURRENT_USER:
            return{
                ...state,
                currentUser: ''
            }
        default:
            return state
    }   
}
export default userReducer