import {combineReducers} from 'redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzasReducer} from '../src/Components/reducers/pizzaReducers';
import { CartReducer } from './Components/reducers/cartReducers';

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    CartReducer : CartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    CartReducer :{
        cartItems : cartItems
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store