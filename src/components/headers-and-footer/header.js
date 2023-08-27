import React, { useState } from 'react'
import { Cart3 , Person } from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {
    const cartItems = useSelector(state => state.cart);
    const products = useSelector(state => state.cart);
    const [showModal, setShowModal] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()
    const [activeLink, setactiveLink] = useState("");

    const handleCartClick = () => {
        setShowModal(true)
    };


    return (

        <>
            <nav className="navbar  navbar-expand-lg py-3 text-light ">
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
                        <div className='d-flex justify-content-end '>
                            {user ?
                                <li className="nav-item">
                                    <p className="text-black me-3   py-2" aria-current="page">Hi,{user.username}</p>
                                </li> :
                                <li className="nav-item">
                                    <NavLink className="btn btn-primary " aria-current="page" to="/signup">sign up</NavLink>
                                </li>
                            }
                            <li className="nav-item position-relative ">
                                <NavLink className="nav-link text-black " aria-current="page" onClick={handleCartClick} > <Cart3 size={30} /> </NavLink>
                                <span className=' bg-danger position-absolute rod '> {products.length} </span>
                                {showModal &&
                                    <div className="model position-absolute  bg-white text-dark  mx-auto" style={{ width: "330px" }} >
                                        <div className="modal-container">
                                            <div className="modal-content  p-4">
                                                <button className="btn-close fs-5" onClick={() => setShowModal(false)}>
                                                </button>
                                                {cartItems.map((item) => (
                                                    <p> {item.title} {Math.floor(item.price)} $</p>
                                                ))}                            <div className='row justify-content-end'>
                                                    <button className='btn btn-primary col-12 me-2' onClick={() => { navigate("/cart"); setShowModal(false) }}>go to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;