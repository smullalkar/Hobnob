import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../Components/Home/Home';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
            </div>
        )
    }
}
