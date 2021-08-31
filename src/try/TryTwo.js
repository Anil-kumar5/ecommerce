import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectOne } from './SeleCtion';
 function TryTwo({role}) {
     console.log(role)
    return (
        <div>
           role-{role}
        </div>
    )
}
const mapStateToProps  = createStructuredSelector({
    role:selectOne
})
export default connect(mapStateToProps) (TryTwo)
