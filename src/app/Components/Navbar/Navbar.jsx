import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top scroll-bar">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">
                        Logo
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    Contact
                                </a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar