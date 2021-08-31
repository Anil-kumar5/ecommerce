import React from 'react'
const products = [
    {
        name:'crocs',
        price:'3k',
        id:1
    },{
        name:'sneakers',
        price:'3k',
        id:2
    }
]
function Practice() {
    return (
        <div>
           {products.map(({name,price,id})=>{
               return(
                   <div key={id}>{name}{price}</div>
               )
           }
           )
        } 
        </div>
    )
}

export default Practice
 // if you want to know props history or anything that component must be routed inside a route component

 //if any child component of a routed component wants to access history or anything it doesnt possible you have to send 
 //history or properties of props as props to routed component its children components then it leads to props drilling
 //so to avoid this we have a inbuilt component withrouter



 const data = [
     {
         name:'anil',
         role:'developer'
     },
     {
         name:'kumar',
         role:'backend'
     },
     {
         name:'avula',
         age:24
     }
 ] 
  export const Filtering = () =>{
     const[search,setSearch] = React.useState('');
     const onHandleChange = e =>{ 
     setSearch(e.target.value);
     }
     const filteredData = data.filter((da)=>da.name.includes(search))
     return(
         <>
         <input type="text" value={search} onChange={onHandleChange}/>
         <Filt dataFiltered={filteredData}/>
         </>
     )
 }
 export const Filt = ({dataFiltered}) =>{
    return(
        <>
          {
              //another way of destructuring object properties
              dataFiltered.map(({name,role,age})=><p>{name},{role},{age}</p>)
          }
        </>
    )
}