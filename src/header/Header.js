import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import './Header.css';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/Cart-Dropdown';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chechout from '../cart/Chechout';
function Header({hidden,cartItems,location,history}) {
    console.log(history)
    const disp = cartItems.map(cart=>{
        return (
            <div key={cart.id}>{cart.quantity}</div>
        )
    }
    )
    return (
        <div className="header">
         <Link to="/" className="logolink"><HomeIcon className="logocontainer"/></Link>
         <div className="headerlink"> 
          
        {location.pathname==='/'?(<span className="shopspan" onClick={()=>history.push('/collections')}>shop</span>):null}
        {location.pathname==='/'?(<span className='signinspan' onClick={()=>history.push('/signin')}>Signin</span>):(<span className="signoutspan" onClick={()=>history.push('/')}>Signout</span>)}
          <Link to="/contact" className="contact">Contact
          </Link>
          {/* <Link to ='/cartitems' className="carticon"> */}
              {
                  location.pathname==="/"?null:<CartIcon/>
              }
              {/* <CartIcon/>  */}
              {location.pathname==='/'?null:
                  
                    (disp.length||hidden?<CartDropdown/>:null)
                    //this one works when we added a item to cart
                 
                    
                    // this one works when we click on the carticon
              
              }
              
                  
                
                {
                 
              }
               
          {/* </Link> */}
             </div>           
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        hidden:state.toggleCartHidden.hidden,
        cartItems:state.toggleCartHidden.cartItems
    }
}
export default withRouter(connect(mapStateToProps) (Header))
