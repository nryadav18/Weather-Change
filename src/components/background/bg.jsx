import React from 'react'
import './bg.css'

function Background(props) {
    var img = props.bg;
    return (
        <div className='bg' style={{backgroundImage:`url(${img})`}}></div>
    )
}

    export default Background