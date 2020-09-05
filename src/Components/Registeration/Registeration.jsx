import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        dob: new Date(),
        city: '',
        stat: '',
        pincode: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleDob = date => {
        this.setState({
            dob: date
        });
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, password, gender, dob, city, stat, pincode } = this.state;
        const values = { name, email, phone, password, gender, dob, city, stat, pincode };
        console.log('state',this.state)
        switch (step) {
            case 1:
                return (
                    <Step1
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Step2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        handleDob={this.handleDob}
                        date = {dob}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Step3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm />
                );
            case 5:
                return (
                    <Success />
                );
        }
    }
}

export default Form