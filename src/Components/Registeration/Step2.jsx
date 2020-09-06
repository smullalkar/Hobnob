import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Step extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange, date, handleDob, onType } = this.props;

        return (
            <div className="form-container">
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-3 col-form-label" htmlFor="gender">Gender</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/gender.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <select
                        className="custom-select"
                        name='gender'
                        value={values.gender}
                        onChange={inputChange}
                    >
                        <option defaultValue>Select...</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 row offset-2 my-3">
                    <label className="col-form-label mr-4" style={{ marginLeft: '44px' }} htmlFor="dob">DOB</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/datepicker.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <DatePicker
                        name='dob'
                        className="form-control"
                        selected={date}
                        onChange={handleDob}
                    />
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-3 col-form-label" htmlFor="pincode">Pincode</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/pincode.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="text" className="form-control" name="pincode" onChange={onType} value={values.pincode} />
                </div>
                <div className='text-center'>
                    {
                        values.pincode !== '' && values.cityAvailable === false ? <div>Please enter valid pincode</div> : <></>
                    }
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-3 col-form-label" htmlFor="city">City</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/city.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="text" className="form-control" name="city" onChange={inputChange} value={values.city} />
                    {/* <select
                        className="custom-select"
                        name='city'
                        value={values.city}
                        onChange={
                            inputChange
                        }
                    >
                        <option defaultValue>Select...</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Bengaluru'>Bengaluru</option>
                        <option value='Pune'>Pune</option>
                    </select> */}
                </div>
                <div className="input-group mb-2 mr-sm-2 col-7 offset-2 my-3">
                    <label className="col-sm-3 col-form-label" htmlFor="stat">State</label>
                    <div className="input-group-prepend">
                        <div className="input-group-text"><img alt='...' src='/state.svg' style={{ width: '15px', height: '15px' }} /></div>
                    </div>
                    <input type="text" className="form-control" name="stat" onChange={inputChange} value={values.stat} />
                    {/* <select
                        className="custom-select"
                        name='stat'
                        value={values.stat}
                        onChange={
                            inputChange
                        }
                    >
                        <option defaultValue>Select...</option>
                        <option value='Maharashtra'>Maharashtra</option>
                        <option value='Karnataka'>Karnataka</option>
                    </select> */}
                </div>
                <br />

                <div className="row">
                    <div className="col-6">
                        <button className='btn text-light' style={{ backgroundColor: '#222' }}onClick={this.back}>Previous</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className='btn text-light' style={{ backgroundColor: '#bb392a' }} onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step