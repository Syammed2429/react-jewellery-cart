import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="container text-center footer "  >
                <div>
                    <p>Social Media</p>
                    <div className="">
                        <i className="bi bi-twitter mx-2"></i>
                        <i className="bi bi-instagram mx-2"></i>
                        <i className="bi bi-youtube mx-2"></i>
                        <i className="bi bi-whatsapp mx-2"></i>
                    </div>



                </div>

                <div>
                    <Link to="/faq">FAQ</Link>
                </div>
                {/* Job Opportunities */}
                <div>
                    <p>Some Jobs</p>
                </div>

            </div>

        </>
    )
}

export { Footer }
