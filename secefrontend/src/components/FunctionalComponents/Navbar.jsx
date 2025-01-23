import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../../css/Navbar.css'
import '../../css/signUp.css'
const Navbar = ({ onLogout }) => {

    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown);
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link" >Gallery</Link></li>

                    <li><Link to='/Contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
                        {dropdown && (<ul>
                            <li>useState</li>
                            <li>useEffect</li>
                        </ul>)}
                    </div>
                    <li><Link to='/UseState' className="link">UseState</Link></li>
                    <li><Link to='/UseEffect' className="link">UseEffect</Link></li>
                    <li><Link to='/use-effectapi' className="link">UseEffectAPI</Link></li>
                    <li><Link to='/use-ref' className="link">UseRef</Link></li>
                    <li><Link to='/use-memo' className="link">UseMemo</Link></li>
                    <li><Link to='/use-call' className="link">UseCallback</Link></li>
                    <li><Link to='/useimg' className="link"></Link></li>
                    <li><Link to='/signUp' className="link">SignUp</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;