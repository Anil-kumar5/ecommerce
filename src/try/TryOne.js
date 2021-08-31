import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { addRole } from '../redux/Actions';
import { selectOne } from './SeleCtion';
 function TryOne ({role,onAdd}) {
    return (
        <div>
          role-{role}
          <button onClick={onAdd}>click</button>
        </div>
    )
}
// const mapStateToProps = createStructuredSelector({
//     role:selectOne
// })
const mapStateToProps = state =>{
    return{
        role:state.toggleCartHidden.role
    }
}
const mapDispatchToProps = dispatch =>({
    onAdd : () =>dispatch(addRole())
})
export default connect(mapStateToProps,mapDispatchToProps) (TryOne)
