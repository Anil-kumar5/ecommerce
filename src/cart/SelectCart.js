import {createSelector} from 'reselect';
//first we have to install reselect library
const selectCart = state =>state.toggleCartHidden;
//here selectcart is a function which gets whole state and resturns part of the state
//here selectcart is a input selector
//suppose if you want to use another input select use a function like above
console.log(selectCart)
export const selectCartItems = createSelector(
    //create selector is a function which takes two arguements
    [selectCart],
    //first one is the collection of inputselectors
    toggleCartHidden =>toggleCartHidden.cartItems
    //secondone is a function that returns the property you want from input selector
    //if there are two or more inputselectors ex:- const selectUser = state =>state.reducer
    //and inside a first arguement array we have to pass selectuser
    //and inside a second arguement we have to use two parameter and values and we have to return what we want
);
console.log(selectCartItems)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    //here we are using another selector here
    cartItems=>
    cartItems.reduce((accumu,cartItem)=>
         accumu+cartItem.quantity,0
     )
     //in second arguement we are doing a function that returns the quantity
); 

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cart=>
    cart.reduce((accum,cartI)=>
    accum+cartI.quantity*cartI.price,0)
    // here we created anotherselector function just to retrieve extra property from state and used that value
)