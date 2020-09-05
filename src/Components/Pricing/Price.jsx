import React from 'react'

export default function Price() {
    return (
        <div className='container-fluid p-5 text-light' style={{ backgroundColor: '#3c3c3c' }}>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h3 className='font-weight-bold pt-5'>Manage all your insurance policies & claims now from HobNob</h3>
                    <h6>With one single account for your entire family, it's easier than ever to manage all your policies, their renewals, claims & more.</h6>
                </div>
                <div className='col-6'>
                    <h3 className='text-center p-2' style={{ marginRight: '100px' }}>Annual Subscription</h3>
                    <div className='row text-center'>
                        <div className='col-5 border p-4'>
                            <h1 className='mb-4'>₹<strong>99/</strong><small>adult</small><br /><small style={{ fontSize: '12px' }}>(Exclusive of GST)</small></h1>
                            <p>For members more than 25 years of age</p>
                        </div>
                        <div className='col-5 border p-4'>
                            <h1 className='mb-4'>₹<strong>49/</strong><small>child</small><br /><small style={{ fontSize: '12px' }}>(Exclusive of GST)</small></h1>
                            <p>For members upto 25 years of age </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
