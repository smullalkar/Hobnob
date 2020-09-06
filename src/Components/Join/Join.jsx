import React from 'react'
import Registeration from '../Registeration/Registeration'
import './Join.css'

export default function Join() {
    return (
        <div className='text-center px-5 pt-0 pt-sm-3 pt-lg-5 pt-md-5 m-lg-5'>
            <h1 className='heading font-weight-bold text-secondary p-2'>Join The Community</h1>
            <h5 className='font-italic subhead'>Know Your Policy | Cashless Assistance | Claim Reimbursements </h5>
            <div className='d-flex flex-lg-row flex-md-row flex-sm-row flex-column justify-content-center p-2'>
                <button className='btn m-2 text-light' data-toggle="modal" data-target="#exampleModalLong" style={{ backgroundColor: '#bb392a' }}>REGISTER NOW</button>
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-weight-bold" id="exampleModalLongTitle">Register</h5>
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
                <button className='btn m-2 text-light' style={{ backgroundColor: '#bb392a' }}>LOGIN</button>
                <button className='btn m-2 text-light' style={{ backgroundColor: '#bb392a' }}>CONTACT US</button>
            </div>
        </div>
    )
}
