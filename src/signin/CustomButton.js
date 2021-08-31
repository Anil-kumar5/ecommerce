import React from 'react'

function CustomButton({children,inverted,...otherProps}) {
    return (
    <button className={`${inverted?'inverted':''}custombutton`}{...otherProps}>
        {/*here we did a function for classname because when the case is true classname is inverted else no classname
        for example saw the collectionitems.js file and you wrote a inverted there
         and the custom button we used is a basic classmame i.e., whenever we use this component css what we used in custombutton displys*/}
    {children}
    </button>
    )
}

export default CustomButton
