import { ADD_ITEM, ADD_ITEM_TO_CART, REMOVE_ITEM, REMOVE_ITEM_FROM_CHECKOUT, ROLE_DE, TOGGLE_CART_HIDDEN } from "./ActionType"


export const cartHidden = () =>{
    return{
        type:TOGGLE_CART_HIDDEN
    }
}

export const addItemToCart = item =>({
        type:ADD_ITEM_TO_CART,
        payload:item
    }
)
export const addRole = () =>({
    type:ROLE_DE
})
//no nee to add return just use open paranthesis

export const removeItemCheckout = item =>({
    type:REMOVE_ITEM_FROM_CHECKOUT,
    payload:item
});

export const removeItem = item => ({
    type:REMOVE_ITEM,
    payload:item
})

// export const addItem = item => ({
//     type:ADD_ITEM,
//     payload:item
// }) use addItemtocart action because both are same