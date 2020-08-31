import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
 

export class Success extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
         return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user detailes"/>
                     <h1> Thank you for your subsccription</h1>
                     <p>You will get an email for further instruction</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;