export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"

export const setCurrentUser = user =>({
    type: SET_CURRENT_USER,
    payload: user
})
export const removeCurrentUser = user =>({
    type: REMOVE_CURRENT_USER,
    payload: ""
})