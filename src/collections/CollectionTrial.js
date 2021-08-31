
import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CollectionSelect } from './CollectionSelect';
function CollectionTrial({collections}) {
    return (
        <div>
           {console.log(collections)} 
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: CollectionSelect
})
export default connect(mapStateToProps) (CollectionTrial)

