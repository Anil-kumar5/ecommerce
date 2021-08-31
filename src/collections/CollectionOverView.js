import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { CollectionSelect } from './CollectionSelect';
import CollectionsPreview from './CollectionsPreview';
function CollectionOverView({collections}) {
    return (
        <div>
           {
               collections.map(({id,...otherProps})=>
                <CollectionsPreview key={id} {...otherProps}/>
                )
           } 
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:CollectionSelect
})
export default connect(mapStateToProps) (CollectionOverView)
