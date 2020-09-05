import React from 'react'

export default function Footer() {
    return (
        <div style={{backgroundColor:'#222'}} className='p-5 container-fluid text-muted text-center'>
            <p>© 2020 Bima Garage | All Rights Protected</p>
            <p>Social Media Links</p>
            <div className='d-flex justify-content-center'>
                <img alt='...' className='m-3' src='/fb.svg' style={{ width: '30px', height: '30px' }} />
                <img alt='...' className='m-3' src='/insta.svg' style={{ width: '30px', height: '30px' }} />
                <img alt='...' className='m-3' src='/twitter.svg' style={{ width: '30px', height: '30px' }} />
                <img alt='...' className='m-3' src='/linkedin.svg' style={{ width: '30px', height: '30px' }} />
            </div>
        </div>
    )
}
