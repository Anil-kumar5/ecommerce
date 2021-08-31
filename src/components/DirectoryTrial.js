import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from '../cart/SelectCart';
import { DirectorySelect } from './SelectDirectory';
function DirectoryTrial({products}) {
    return (
        <div>
            {
                products.map(product=><div key={product.id}>{product.title}</div>)
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    products : DirectorySelect
})
export default connect(mapStateToProps) (DirectoryTrial)
