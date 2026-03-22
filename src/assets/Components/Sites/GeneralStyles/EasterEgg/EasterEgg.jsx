import './EasterEgg.css'

import {useState, useEffect} from 'react'

export default function EasterEgg({ active, setActive }){

    const handleClick = () => setActive (prev => !prev);

    useEffect (() => {
        console.log(active);
    },[active])


    return(
        <>
            <div className="easterDiv">
            <button onClick={handleClick} className="easterButton"></button>

            </div>
        </>
    )
}