import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Confirm from './Confirm';
import Success from './Success';
import axios from 'axios'

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
        pincode: '',
        cityAvailable: false,
        spouse: false,
        father: false,
        mother: false,
        child1: false,
        child2: false,
        
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    search = () => {
        if (this.state.pincode !== '') {
            return axios
                .get(`https://pincode.saratchandra.in/api/pincode/${this.state.pincode}`)
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            cityAvailable: true,
                            city: res.data.data[0].district,
                            stat: res.data.data[0].state_name

                        })
                    }
                    // else if (res.status === 404) {
                    //     this.setState({ cityAvailable: false })
                    // }
                })
                .catch(err => this.setState({
                    cityAvailable: false,
                    city: '',
                    stat: ''
                }));
        }
        else {
            return
        }
    }

    onType = (e) => {
        this.setState({ pincode: e.target.value });
        clearTimeout(this.debouncedType);
        this.debouncedType = setTimeout(this.search, 500)
    }

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
        const { name, email, phone, password, gender, dob, city, stat, pincode, cityAvailable } = this.state;
        const values = { name, email, phone, password, gender, dob, city, stat, pincode, cityAvailable };
        console.log('state', this.state)
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
                        onType={this.onType}
                        handleDob={this.handleDob}
                        date={dob}
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