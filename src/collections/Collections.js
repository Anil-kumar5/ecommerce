import React from 'react'
// import { collectionData } from './CollectionData';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsPreview from './CollectionsPreview'
import './Collections.css';
import Header from '../header/Header';
import { CollectionSelect } from './CollectionSelect';
import CollectionOverView from './CollectionOverView';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import CollectionCategory from './CollectionCategory';
import RoutingPract from './RoutingPract';
import categoryPage from './Category';
const TrialPage = ({match}) =>{
    console.log(match)
    return(
        <div>
            trial
        </div>
    )
}
const TrialPageTwo = () =>(
    <div>
        trial2
    </div>
)
    

function Collections({collectionData,match}) {
    // const [data,setData] = React.useState(collectionData)
    debugger;
    console.log(match.path)
    return (
        <>

        <Header/>
        <div className="collection">
          {/* {
              data.map(({id,...otherCollectionProps})=>(
               <CollectionsPreview key={id} {...otherCollectionProps}/>
              ))
          }    */}
          {/* <CollectionOverView/> */}
          {/* <Route component={CollectionOverView}/> its worked */}
          <BrowserRouter>
          <Route exact path={`${match.path}`} component={CollectionOverView}/>
          {/* {console.log(match.path)} */}
          <Route exact path={`${match.path}/:id`} component={CollectionCategory}/>
          {/* <Route component={RoutingPract}/>  its worked */}
          <Route path={`${match.path}/:categoryId`} component={categoryPage}/>
          <Route exact path={match.path+'/trial'} component={TrialPage}/>
          <Route exact path="/collections/trial2" component={TrialPageTwo}/>
          </BrowserRouter>
        </div>
    
        </>
    )
}
// const mapStateToProps = createStructuredSelector({
//    collectionData :  CollectionSelect
// })
// export default connect(mapStateToProps) (Collections)
export default Collections
