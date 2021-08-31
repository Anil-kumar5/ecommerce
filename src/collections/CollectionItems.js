import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CustomButton from '../signin/CustomButton';
import {connect} from 'react-redux';
import { addItemToCart } from '../redux/Actions';
function CollectionItems({item,addToCart}) {
    const{image,name,price} = item;
    return (
        <div>
           <div className="itemsbackground" style={{backgroundImage:`url(${image})`}}>
           <div className="items">
               <span className="itemname">{name}</span>
               <span className="itemprice"><AttachMoneyIcon className="itemicon"/>{price}</span>
           </div>
           </div>
           <CustomButton inverted className="inveretdclass" onClick={()=>addToCart(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return{
        addToCart : (item)=>dispatch(addItemToCart(item))
    }
}
export default connect(null,mapDispatchToProps) (CollectionItems)
