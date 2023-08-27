import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom'
function Navbar() {
const [activeLink , setactiveLink] = useState("") ;
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 text-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">shopee</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-center w-100">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${activeLink === '/' ? 'active' : ''} `} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={`nav-link ${activeLink === '/about' ? 'active' : ''} `} aria-current="page" to="/about">about</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={`nav-link ${activeLink === '/productlist' ? 'active' : ''} `} aria-current="page" to="/productlist">Item List</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={`nav-link ${activeLink === '/product' ? 'active' : ''} `} aria-current="page" to="/product">products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar