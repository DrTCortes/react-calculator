import React from "react";
import './Button.css'

export default function Button(props) {
    return(
        <button className={`
            button
            ${props.operator && 'operator'}
            ${props.double && 'double'}
            ${props.triple && 'triple'}
            `}
            
            onClick={e =>{ props.click && props.click(props.label)}}
        >
            {props.label}
        </button>
    )
}