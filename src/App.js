import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value: 'React + LWC'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <my-sample></my-sample>
                <react-slds-card title="Lightning Card">
                    <input
                        className="slds-input"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <react-slds-button
                        variant="brand"
                        label="Lightning Button"
                    ></react-slds-button>
                </react-slds-card>
            </div>
        );
    }

    handleChange(evt) {
        this.setState({
            value: evt.target.value
        });
    }
}
export default App;
