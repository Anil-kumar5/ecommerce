import React from 'react'
import './Homepage.css'
import {withRouter} from 'react-router-dom';
function Menuitems({ title, imageurl,history,linkurl,match }) {
    return (
        // in below line if we directly use history.push('/hats') then whenever we clicks on those 5 images 
        //hats page opens so to avoid that we added a extra property in directory component called linkurl
        // and here we used backgroundimage style because for every data object we have to set particular image as
        //background while iterating the map method
        <div className="cont" onClick={()=>history.push(`${match.url}${linkurl}`)}>
            <div className="backgroundimg" style={{ backgroundImage: `url(${imageurl})` }}>
                <div className="content">
                    <h1 className="headertitle">{title.toUpperCase()}</h1>
                    <span className="shopnow">SHOP NOW</span>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Menuitems)
//here we used withRouter because this component is is nested to nested child of homepage component which is routed
//rather than sending history , match,url etc., as props from one component to another component to another(leads to props driling)
//by using withrouter we can directly use them 