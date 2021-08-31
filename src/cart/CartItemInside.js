import React from 'react'
import { connect } from 'react-redux';
import { addItemToCart, removeItem } from '../redux/Actions';
function CartItemInside({ cartitems ,addItem,removeItem }) {
    const { image, name, price, quantity } = cartitems
    return (
        <div className="cartitemsinside">
            <img src={image} alt="cart items" />
            <div className="cartname">
                <span className="name">{name}</span>
                <span className="price">{quantity}x{price}</span>
                <span onClick={()=>addItem(cartitems)}>add</span>
                <span onClick={()=>removeItem(cartitems)}>remove</span>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    addItem : item =>dispatch(addItemToCart(item)),
    removeItem : item => dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CartItemInside)
