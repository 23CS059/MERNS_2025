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
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link" >Gallery</Link></li>
                    <li><Link to='/Contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} >Hooks</span>
                        {dropdown && (<ol onMouseLeave={toggleDropdown}>
                    <li><Link to='/UseState' className="link">UseState</Link></li>
                    <li><Link to='/UseEffect' className="link">UseEffect</Link></li>
                    <li><Link to='/use-effectapi' className="link">UseEffectAPI</Link></li>
                    <li><Link to='/use-ref' className="link">UseRef</Link></li>
                    <li><Link to='/use-memo' className="link">UseMemo</Link></li>
                    <li><Link to='/use-call' className="link">UseCallback</Link></li>
                    <li><Link to='/use-reducer' className="link">UseReducer</Link></li>
                    <li><Link to='/useimg' className="link">UseAPIimg</Link></li>
                    <li><Link to='/ReactLifecycleMethods' className="link">ReactLifecycleMethods</Link></li>
                    <li><Link to="/Student" class="link">Student</Link></li>
                                   
                </ol>)}
                </div>                       
                <li><Link to="/Memo" class="link">React.memo</Link></li>
                <li><Link to='/signUp' className="link">SignUp</Link></li>
                </ul>                
                </nav>
        </header>
        )
}

export default Navbar;jjjj