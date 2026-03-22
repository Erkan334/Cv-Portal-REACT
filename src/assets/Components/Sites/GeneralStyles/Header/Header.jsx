import { NavLink } from 'react-router-dom'

import './Header.css'

export default function Header(){

    const navClass = ({isActive}) => isActive ? "active" : "";
    
    return(
        <>
        <header>
                <nav>
                    <ul className="left">
                        <li><NavLink to="/" className={navClass}>Erik Abrahamsson</NavLink></li>
                    </ul>

                    <ul className="right">
                        <li><NavLink to="/" className={navClass}>Home</NavLink></li>
                        <li><NavLink to="/portfolio" className={navClass}>Portfolio</NavLink></li>
                        <li><NavLink to="/about" className={navClass}>About</NavLink></li>
                        <li><NavLink to="/cv1" className={navClass}>CV</NavLink></li>
                    </ul>
                </nav>
        </header>
        </>
    )
}