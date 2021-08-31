import { combineReducers } from "redux";
import CartUtility, { addItemAtCheckout, removeItemAtCheckout } from "../cart/CartUtility";
import { collectionData } from "../collections/CollectionData";
import { ADD_ITEM, ADD_ITEM_TO_CART, REMOVE_ITEM, REMOVE_ITEM_FROM_CHECKOUT, ROLE_DE, TOGGLE_CART_HIDDEN } from "./ActionType";

const initialState = {
    hidden: false,
    cartItems: [],
    role: ''
}
const toggleCartHidden = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN: return {
            ...state,
            hidden: !state.hidden
        }
        case ADD_ITEM_TO_CART: return {
            ...state,
            // cartItems:[...state.cartItems,action.payload]
            /*here we are used spread operator bcoz we add a new item to cart
        rather than showing only one it shows previously added items also if we dont add it wont works */
            cartItems: CartUtility(state.cartItems, action.payload)
        }
        case REMOVE_ITEM_FROM_CHECKOUT:
            return{
            ...state,
            cartItems:state.cartItems.filter(
                cartItem=> cartItem.id !==action.payload.id
                  )
        };
        case REMOVE_ITEM :return{
            ...state,
            cartItems:removeItemAtCheckout(state.cartItems,action.payload)
        }
        // case ADD_ITEM : return{
        //     ...state,
        //     cartItems:addItemAtCheckout(state.cartItems,action.payload)
        // } if you observe the syntax for both adding item to cart and this action is 
        case ROLE_DE: return {
            ...state,
            role: 'anil kumar'
        }
        default: return state;
    }
}


 const    productData = [
        {
            id:1,
            title:'sneakers',
            imageurl:'./sneakers.jpg',
            linkurl:'sneakers'
        },
        {
            id:2,
            title:'crocs',
            imageurl:'./crocs.jpg',
            linkurl:'crocs'
        },
        {
            id:3,
            title:'shoes',
            imageurl:'./shoes.jpg',
            linkurl:'shoes'
        },
        {
            id:4,
            title:'men',
            imageurl:'./men.jpg',
            linkurl:'men'
        },
        {
            id:5,
            title:'women',
            imageurl:'./women.jpg',
            linkurl:'women'
        }
    ]
 


export const directoryReducer = (state = productData,action) => {
     switch(action.type){
         default : 
         return state
     }
   
}
 export const collectionReducer = (state = collectionData,action) => {
     switch(action.type){
         default:
             return state
     }
 }
 // rather than writing collectiondata we just imported that component
export const rootReducer = combineReducers({
    toggleCartHidden,directoryReducer,collectionReducer
})