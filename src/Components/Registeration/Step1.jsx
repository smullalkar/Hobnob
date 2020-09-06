import React, { Component } from 'react'

export class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container text-left">
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-4 col-form-label" htmlFor="name">Name</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/user.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="text" className="form-control" name="name" onChange={inputChange} value={values.name} />
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-4 col-form-label" htmlFor="email">Email</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/email.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="email" className="form-control" name="email" onChange={inputChange} value={values.email} />
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-4 col-form-label" htmlFor="phone">Phone</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/phone.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="text" className="form-control" name="phone" onChange={inputChange} value={values.phone} />
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-4 col-form-label" htmlFor="password">Password</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/password.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="password" className="form-control" name="password" onChange={inputChange} value={values.password} />
                </div>

                <br />

                <div className="text-right">
                    <button className='btn text-light' style={{ backgroundColor: '#bb392a' }} onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default Step1