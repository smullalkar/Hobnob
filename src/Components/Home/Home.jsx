import React from 'react'
import './Home.css'
import Benefits from '../Benefits/Benefits'
import Price from '../Pricing/Price'
import Join from '../Join/Join'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <React.Fragment>
            <Join/>
            <div className='text-center m-2 m-sm-4 m-md-5 m-lg-5 px-5 pb-0'>
                <h1 className='heading font-weight-bold text-secondary'>Hassle-free Insurance Claim Services</h1>
                <h5 className='subhead font-italic'>Manage all your policies and future claims in a simple way</h5>
            </div>
            <div className='container'>
                <div className='row text-center justify-content-around'>
                    <div className='col-4 p-2 m-lg-5 m-md-5 m-sm-3 m-3 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-lg-3 m-md-3 m-sm-1' src='/health.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>HEALTH</div>
                    </div>
                    <div className='col-4 p-2 m-lg-5 m-md-5 m-sm-3 m-3 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-lg-3 m-md-3 m-sm-1' src='/accident.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>ACCIDENTAL</div>
                    </div>
                    <div className='col-4 p-2 m-lg-5 m-md-5 m-sm-3 m-3 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-lg-3 m-md-3 m-sm-1' src='/life.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>LIFE</div>
                    </div>
                    <div className='col-4 p-2 m-lg-5 m-md-5 m-sm-3 m-3 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-lg-3 m-md-3 m-sm-1' src='/travel.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>TRAVEL</div>
                    </div>
                </div>
            </div>
            <Benefits/>
            <Price/>
            <Footer/>
        </React.Fragment>
    )
}
