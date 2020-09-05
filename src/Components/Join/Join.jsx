import React from 'react'
import Registeration from '../Registeration/Registeration'

export default function Join() {
    return (
        <div className='text-center px-5 pt-5 m-5'>
            <h1 className='font-weight-bold text-secondary p-2'>Join The Community</h1>
            <h4 className='font-italic'>Know Your Policy | Cashless Assistance | Claim Reimbursements </h4>
            <div className='d-flex justify-content-center p-2'>
                <button className='btn m-2 text-light' data-toggle="modal" data-target="#exampleModalLong" style={{ backgroundColor: '#bb392a' }}>REGISTER NOW</button>
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
                <button className='btn m-2 text-light' style={{ backgroundColor: '#bb392a' }}>LOGIN</button>
                <button className='btn m-2 text-light' style={{ backgroundColor: '#bb392a' }}>CONTACT US</button>
            </div>
        </div>
    )
}
