import axios from 'axios';
export const placeOrder=(token, subtotal)=>async (dispatch, getState)=>{

    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().CartReducer.cartItems

    try {
        const response = await axios.post('/api/orders/placeOrder', {token, subtotal, currentUser, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})
        console.log(response);
    } catch (error) {
        dispatch({type: 'PLACE_ORDER_FAILED'})
        console.log(error);
    }
}



export const getUsersOrders = () => async (dispatch,  getState)=>{

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({type: 'GET_USER_ORDERS_REQUEST'})

    try {
        const response = await axios.get('api/orders/getuserorders', {userid : currentUser._id})
        console.log(response);
        dispatch({type: 'GET_USER_ORDERS_SUCCES', payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload : error})
        
    }
}