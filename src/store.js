import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducers } from './reducers/cartReducers'

const reducer=combineReducers({
    cart:cartReducers
         
})

let initialState={
    cart :{
        cartItems:localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : [] ,
        shippingInfo:localStorage.getItem('shippingInfo') ?
        JSON.parse(localStorage.getItem('shippingInfo')) : {}
    }
    
}

const middleware=[thunk]

const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store

