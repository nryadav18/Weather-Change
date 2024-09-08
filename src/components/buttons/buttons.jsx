import React, { useState } from 'react'
import './buttons.css'
import Background from '../background/bg'
import bg1 from "../../assets/backgrounds/rainy.gif"
import weather from './weathers'

function Buttons() {
    const [a,b] = useState(weather[0].gif)
    return (
        <>
            <Background bg={a}/>
            <div className="but">
                {
                    weather.map((val,ind) => {
                        return (
                            <div key={ind} style={{backgroundImage:`url(${val.gif})`}} onClick={()=>b(val.gif)} className="button">
                                <p>{val.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Buttons