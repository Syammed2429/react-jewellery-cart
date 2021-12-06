import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
    return (
        <>
            <div className="d-flex justify-content-center gap-5 ">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
                <i className="bi bi-cart"></i>
            </div>

        </>
    )
}

export { Navabar }
