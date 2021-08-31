import Menuitems from "./Menuitems"
import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { DirectorySelect } from "./SelectDirectory";
// export const products = [
//     {
//         id:1,
//         title:'sneakers',
//         imageurl:'./sneakers.jpg',
//         linkurl:'sneakers'
//     },
//     {
//         id:2,
//         title:'crocs',
//         imageurl:'./crocs.jpg',
//         linkurl:'crocs'
//     },
//     {
//         id:3,
//         title:'shoes',
//         imageurl:'./shoes.jpg',
//         linkurl:'shoes'
//     },
//     {
//         id:4,
//         title:'men',
//         imageurl:'./men.jpg',
//         linkurl:'men'
//     },
//     {
//         id:5,
//         title:'women',
//         imageurl:'./women.jpg',
//         linkurl:'women'
//     }
// ]

// using them by using redux
//  const SearchField = ({Products})=>{
//     const[seatch,setSearch] = React.useState('');
//     const onSearchChange = e =>setSearch(e.target.value)
//     const filtered = products.filter((filt)=>filt.title.toLocaleLowerCase().includes(seatch.toLocaleLowerCase()))
//     return(
//         <>
//         <input type="text" value={seatch} onChange={onSearchChange} className="searchfield" placeholder="search category"/>
//         {/* <Directory products={filtered}/> */}
//         </>
//     )
// }
// const mapStateToProps = createStructuredSelector({
//     products :DirectorySelect
// })
// export default connect(mapStateToProps) (SearchField)
//  export const Directory = ({products}) =>{
//     return(
//         <>
//         {
//             // products.map(({id,title,imageurl,linkurl})=>( we can also write as 
//                 products.map(({id,...otherprops})=>(
//                 // <Menuitems key={id} title={title} imageurl={imageurl} linkurl={linkurl}/> another way
//                 <Menuitems key={id} {...otherprops}/>
//             ))
//         }
//         </>
//     )
// }
 

const SearchField = ({products}) =>{
    const[seatch,setSearch] = React.useState('');
    const onSearchChange = e =>setSearch(e.target.value);
    const filtered = products.filter((product)=>product.title.toLocaleLowerCase().includes(seatch.toLocaleLowerCase()));
    return(
        <>
    <input type="text" value={seatch} onChange={onSearchChange} className="searchfield" placeholder="search category"/>
       <Directory products={filtered}/>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    products: DirectorySelect
})
export default connect(mapStateToProps) (SearchField)

const Directory = ({products}) => {
    return(
        <>
          {
              products.map(({id,...otherProps})=>
                // <Menuitems key={product.id} product={product}/>
                <Menuitems key={id} {...otherProps}/> 
                )
          }
        </>
    )
}