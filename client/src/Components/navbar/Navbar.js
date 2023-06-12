import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
                <a className="navbar-brand fst-1 fst-bold" to='/' >YUMMY PIZZA</a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item ">
                            <a className="nav-link " href="#">Home <span class="sr-only"></span></a>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <a className="btn bg-white text-success mx-1" href="#">Login</a>
                        <a className="btn bg-white text-success mx-1" href="#">Cart</a>
                    </div>

                    
                </div>
            </nav>
        </div>
    )
}