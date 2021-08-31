import React from 'react'

function CartUtility(cartItems,cartItemToAdd) {
    // here cart items are the items which are loaded in cart and toadd is the one which going to add
    //these arguements are called or assign the values at rootreducer

    const isExist = cartItems.find(cartItem =>cartItem.id===cartItemToAdd.id);
    // here we are checking whether the item we are going to add are alraedy in cart are not by using its id

    if(isExist){
         return cartItems.map(cartItem=>
            //here we are using map method to return an new array 
             cartItem.id===cartItemToAdd.id?
             {...cartItem,quantity:cartItem.quantity+1}
             //here if the both the ids are same, we are adding a new propery quantity to collectiondata object
             //and you know why we use spread operator to dispaly the previous state data
             :cartItem
             //and else return the cartItemData
         )          
    }
    //above if block wont works until you add one item
    return [...cartItems,{...cartItemToAdd,quantity:1}]
    //if both the ids are not same then return the hole cartItems data and we are assigning a base value of 1 to quantity
}

export default CartUtility


export const  removeItemAtCheckout = (cartItems,itemToRemove) =>{
    const isAvailable = cartItems.find(
        cartItem =>cartItem.id===itemToRemove.id
    );
    if(isAvailable.quantity===1){
     return  cartItems.filter(cartItem =>cartItem.id!==itemToRemove.id)
    }
    return cartItems.map(cartItem=>
        cartItem.id===itemToRemove.id?
        {...cartItem,quantity:cartItem.quantity-1}
        :cartItem
        )
}

// export const addItemAtCheckout = (cartItems,itemToAdd) =>{
//     const isAvailable = cartItems.find(
//       cartItem => cartItem.id===itemToAdd.id
//     )
//     if(isAvailable){
//         return cartItems.map(cartItem=>
//             cartItem.id===itemToAdd.id?
//             {...cartItem,quantity:cartItem.quantity+1}
//             :cartItem
//         )
//     }
// } above cartutility function code is also same
