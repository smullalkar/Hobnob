import React, { Component } from 'react'
import DatePicker from "react-datepicker";

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
        const { values, inputChange, date, handleDob } = this.props;

        return (
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="gender">Gender (M/F)</label>
                    {/* <input type="text" className="form-control" name="facebook" onChange={inputChange('gender')} value={values.facebook} /> */}
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
                <div className="form-group">
                    <label htmlFor="dob">Date Of Birth</label>
                    {/* <input type="text" className="form-control" name="twitter" onChange={inputChange('twitter')} value={values.twitter} /> */}
                    <DatePicker
                        className='ml-3'
                        name='dob'
                        selected={date}
                        onChange={handleDob}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    {/* <input type="text" className="form-control" name="github" onChange={inputChange('github')} value={values.github} /> */}
                    <select
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
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="number" className="form-control" name="pincode" onChange={inputChange} value={values.pincode} />
                </div>
                <div className="form-group">
                    <label htmlFor="stat">State</label>
                    {/* <input type="text" className="form-control" name="github" onChange={inputChange('github')} value={values.github} /> */}
                    <select
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
                    </select>
                </div>
                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step