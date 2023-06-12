import React from 'react'
// import Hero from './hero/hero';
import {Link} from 'react-router-dom'
import './navbar.css'


const Navbar =()=> {
    return (
        <div>
            <nav className="navbar">
                <h3 >YUMMY PIZZA</h3>
                
                    <ul className="nav-links">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/'><li>Menu</li></Link>
                        {/* <Link to='/'><li>Cart</li></Link> */}
                    </ul>
                    {/* <div className='d-flex'>
                        <a className="btn bg-white text-success mx-1" href="#">Login</a>
                        <a className="btn bg-white text-success mx-1" href="#">Cart</a>
                    </div> */}
            </nav>
        </div>
       
    )
}
export default Navbar