import React from 'react'
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './CartIcon.css';
import {connect} from 'react-redux';
import { cartHidden } from '../redux/Actions';
import { selectCartItemsCount } from './SelectCart';
function CartIcon({cartHidden,itemCount}) {
    return (
        <div className="carticon" onClick={cartHidden}>
         <ShoppingCartSharpIcon className="shoppingicon" />
         <span className="cartcount">{itemCount}</span>   
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        // cartLength:state.toggleCartHidden.cartItems 
        // by using cartLenth.length we can count the cartitems length i.e.if we
        //click on item only once ,if we click more than that count wont increases
        itemCount:selectCartItemsCount(state)
    }
}
const mapDispatchToProps = dispatch =>{
    console.log('im being called')
    return{
        cartHidden : () =>dispatch(cartHidden())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)
