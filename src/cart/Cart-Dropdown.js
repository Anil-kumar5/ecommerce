import React from 'react'
import CustomButton from '../signin/CustomButton';
import {connect} from 'react-redux';
import './CartDropdown.css';
import { withRouter } from 'react-router-dom';
import CartItemInside from './CartItemInside';
import Chechout from './Chechout';
import { selectCartItems } from './SelectCart';
function CartDropdown({cartItems,history}) {
    return (
        <div className="cartdropdown">
            <div className="cartitems">
                {
                    cartItems.length?
                    cartItems.map(cart=><CartItemInside key={cart.id} cartitems={cart}/>)
                    :<span className="emptycart">cart is empty</span>
                    //here we no need to use all the properties here so rather than destructuring here we are sending our
                    //cartitems data as props into another component
                } 
                            
            </div>
            <CustomButton onClick = {()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
// const mapStateToProps = state =>{
//     return{
//     cartItems:state.toggleCartHidden.cartItems
//     }
// }
// above way also good when there are more state values to fetch
const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state)
    //here we are using select is whenever we change or update the state it wont rerenders and when we logout also cart items 
    //wont disappear
})
// instead of return keyword we can use open paranthesis if you dont give parenthesis after arrow function it wont works
//here rather than using state parameter and retrieving data we  directly did prop destructuring 
//togglecarthidden is a reducer name and cartitems is a property inside that reducer

export default withRouter(connect(mapStateToProps)(CartDropdown))
