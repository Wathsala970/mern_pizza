import React, { useState } from 'react'
// import Hero from './hero/hero';
import { Link } from 'react-router-dom'
import './navbar.css'
import { BsCart } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import {useSelector} from 'react-redux';

export default function Navbar(){

    const cartstate = useSelector(state => state.CartReducer)
    const [Mobile, setMobile] = useState(false)

    return (
        <div>
            <nav className="navbar">

                <h3 className="logo">YUMMY PIZZA</h3>

                <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onclick={() => setMobile(false)}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/menu'><li>Menu</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/cart'><li>
                        <button className='cartIcon'>
                            <BsCart/> {cartstate.cartItems.length}
                        </button>
                    </li></Link>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}

                </button>

            </nav>
        </div>


    )
}
