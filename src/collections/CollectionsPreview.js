import React from 'react'
import CollectionItems from './CollectionItems';
import {withRouter} from 'react-router-dom';
function CollectionsPreview({title,items,history,location}) {
    return (
        <div>
           <div>
               <h1 className="collectionheader">{title.toUpperCase()}</h1>
               <div className="collectionpreview">
                
                {/* {
                    items.filter((item,index)=>index<4)
                    .map(({id,...otherItems})=>(
                        <CollectionItems  key={id} {...otherItems}/>
                    ))
                } */}
                  {/* here we used filter method to show out only 4 items only */}
                   {/* amd destructuring props and using spread operator to send other props */}
                   {
                       
                       items.filter((item,index)=>index<4)
                       .map((item)=>(
                           <CollectionItems key={item.id} item={item}/>
                       ))
                   }
               </div> 
               </div> 
        </div>
    )
}

export default withRouter(CollectionsPreview)
