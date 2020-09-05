import React from 'react'

export default function Benefits() {
    return (
        <div style={{ backgroundColor: '#bb392a' }} className='mt-5'>
            <h1 className='text-center text-light pt-5'>BENEFITS</h1>
            <div className='row'>
                <div className='p-5 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '470px' }}>
                        <img src='/kyp.png' className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Know Your Policy (KYP)</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">Introducing KYP, an easy-to-understand report about the core benefits of your policies.</p>
                            <div className='row'>
                                <div>(Sent via email for every health & accidental policy)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '470px' }}>
                        <img src='/benefits_reimbursement.png' className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Claim Reimbursements</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">Whenever you request a new claim on an active policy, it becomes our responsibility to ensure your reimbursement are handled in-time with maximum coverage.</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '470px' }}>
                        <img src='/benefits_cashless.png' className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Cashless Assistance</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">Undergoing a cashless treatment in a network hospital? </p>
                            <div className='row'>
                                <div>You can avail regular updates and support on your cashless claims through our call support executives.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-5 pt-0 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '200px' }}>
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Doorstep Claim Service</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">Personalised services to get your file collected by our expert from your home.</p>
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-5 pt-0 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '200px' }}>
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Digitization of I-Records</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">No hassles to keep the hard copy of all reimbursement or cashless claims, you can upload it on our application and access whenever required.</p>
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-5 pt-0 col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px', backgroundColor: '#222', height: '200px' }}>
                        <div className="card-body text-center text-light">
                            <h5 className="card-title font-weight-bold">Optimization of Claims</h5>
                            <hr style={{ border: "1px solid white" }} />
                            <p className="card-text">Team of claim experts at your service for getting optimal claims amount.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
