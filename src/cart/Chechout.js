import React from 'react'
import './Checkout.css';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from './SelectCart';
import { addItem, addItemToCart, removeItem, removeItemCheckout } from '../redux/Actions';

function Chechout({ total, cartItems, itemToRemove, removeItem, addItemAtcheckout }) {
    return (
        <>
            <div className="checkout-page">
                <div className="checkout-headers">
                    <div className="headernae">
                        <span>Product</span>
                    </div>
                    <div className="headername">
                        <span>Product Name</span>
                    </div>
                    <div className="headername">

                        <span>Quantity</span>


                    </div>
                    <div className="headername">
                        <span>Price</span>
                    </div>
                    <div className="headername">
                        <span>Remove</span>
                    </div>
                </div>
                <div className="checkoutcontainer">
                    <div className="checkoutData">
                        {
                            cartItems.map(cartItem => {
                                return (
                                    <div key={cartItem.id} className="checkoutproducts">
                                        <div className="imag"> <img src={cartItem.image} /></div>
                                        <div className="iname"> {cartItem.name}</div>
                                        <div className='iquantity'>
                                            <span className="leftarrow" onClick={() => removeItem(cartItem)}> <KeyboardArrowLeftIcon /> </span>
                                            {cartItem.quantity}
                                            <span className="rightarrow" onClick={() => addItemAtcheckout(cartItem)}> <KeyboardArrowRightIcon /> </span>
                                        </div>
                                        <div className="iprice">{cartItem.price}</div>
                                        <div className='iremove' onClick={() => itemToRemove(cartItem)}>X</div>
                                        {/* if you mistakenly add one letter also it leads to error so concentrate*/}
                                    </div>
                                )
                            })
                        }
                        <div className="checkouttotal">Total- ${total}</div>
                    </div>

                </div>
            </div>
        </>

    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotalPrice
})

const mapDispatchToProps = dispatch => {
    return {
        itemToRemove: (item) => dispatch(removeItemCheckout(item)),
        removeItem: (item) => dispatch(removeItem(item)),
        // addItem : item =>dispatch(addItem(item))

        addItemAtcheckout: item => dispatch(addItemToCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chechout)

