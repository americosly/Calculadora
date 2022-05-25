import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '

    classes+= props.double ? 'double' : ''
    classes+= props.triple ? 'triple' : ''
    classes+= props.mais ? 'mais' : ''
    classes+= props.menos ? 'menos' : ''
    classes+= props.mult ? 'mult' : ''
    classes+= props.div ? 'div' : ''
    
    return (
        <button 
        onClick={e => props.click && props.click(props.label)}   
        className={classes}> 

        
            {props.label} 
    
        </button>

    )
}
