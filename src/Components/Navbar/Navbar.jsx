import React from 'react'
import './Navbar.css'
import Registeration from '../Registeration/Registeration'
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
                    <div className="btn my-2 text-secondary my-sm-0" data-toggle="modal" data-target="#exampleModalLong">REGISTER</div>
                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Registeration</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Registeration />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn my-2 text-secondary my-sm-0 mr-5">CONTACT US</div>
                </form>
            </nav>
        </div>
    )
}
