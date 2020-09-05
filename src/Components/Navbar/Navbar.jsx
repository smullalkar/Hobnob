import React from 'react'
import './Navbar.css'
// #bb392a
// #222;
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light justify-content-between">
                <img alt='...' src='/hobnob.svg' className="navbar-brand ml-5" style={{ width: '100px', height: '50px' }} />
                <form className="form-inline">
                    <img alt='...' className='mr-3' src='/home.svg' style={{ width: '20px', height: '20px' }} />
                    <div className="btn my-2 text-secondary my-sm-0">LOGIN</div>
                    <div className="btn my-2 text-secondary my-sm-0">REGISTER</div>
                    <div className="btn my-2 text-secondary my-sm-0 mr-5">CONTACT US</div>
                </form>
            </nav>
        </div>
    )
}
