import React from 'react'
import {connect} from 'react-redux';
// import { collectionSelectId } from './CollectionSelect';
import CollectionItems from './CollectionItems';
function CollectionCategory({match,collection}) {
    // console.log(match)
    console.log('hello')
    return (
        <div>
            hello
        </div>
    )
}
// const mapStateToProps = (state,ownprops) =>({
//     collection:collectionSelectId(ownprops.match.params.id)(state)
// })
export default connect() (CollectionCategory)
