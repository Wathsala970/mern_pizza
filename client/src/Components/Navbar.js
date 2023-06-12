import React from 'react'
// import Hero from './hero/hero';
import { Link } from 'react-router-dom'
import './navbar.css'
import { BsCart } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <h3 className="logo">YUMMY PIZZA</h3>

                    <ul className="nav-links">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/menu'><li>Menu</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                        <Link to='/cart'><li>
                            <button className='cartIcon'>
                                <BsCart />
                            </button>
                        </li></Link>
                    </ul>

                </div>
            </nav>
        </div>

    )
}
export default Navbar