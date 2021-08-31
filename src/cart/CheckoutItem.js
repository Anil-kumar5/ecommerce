import React from 'react'
import {connect} from 'react-redux';
import { removeItemCheckout } from '../redux/Actions';
function CheckoutItem({cartItem,clearItem}) {
    const {image,name,quantity,price} = cartItem
    return (
        <div className="checkoutproducts">
            <div className="imag"> <img src={image} /></div>
            <div className="iname"> {name}</div>
            <div className='iquantity'>{quantity}</div>
            <div className="iprice">{price}</div>
            <div className='iremove' onClick={()=>clearItem(cartItem)}>X</div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
    clearItem: item =>dispatch(removeItemCheckout(item))
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem)
