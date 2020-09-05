import React from 'react'
import './Home.css'
import Benefits from '../Benefits/Benefits'

export default function Home() {
    return (
        <React.Fragment>
            <div className='text-center m-5 px-5 pt-5 pb-0'>
                <h1 className='font-weight-bold text-secondary'>Hassle-free Insurance Claim Services</h1>
                <h4 className='font-italic'>Manage all your policies and future claims in a simple way</h4>
            </div>
            <div className='container'>
                <div className='row text-center justify-content-around'>
                    <div className='col-3 p-2 m-5 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-3' src='/health.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>HEALTH</div>
                    </div>
                    <div className='col-3 p-2 m-5 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-3' src='/accident.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>ACCIDENTAL</div>
                    </div>
                    <div className='col-3 p-2 m-5 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-3' src='/life.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>LIFE</div>
                    </div>
                    <div className='col-3 p-2 m-5 border border-dark' style={{ borderRadius: '10px', backgroundColor:'#bb392a' }}>
                        <img alt='...' className='m-3' src='/travel.svg' style={{ width: '60px', height: '60px' }} />
                        <div className='text-light font-weight-bold'>TRAVEL</div>
                    </div>
                </div>
            </div>
            <Benefits/>
        </React.Fragment>
    )
}
