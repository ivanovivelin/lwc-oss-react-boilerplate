import '@lwc/synthetic-shadow';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Sample from 'my/sample';
import Card from 'lightning/card';
import Button from 'lightning/button';

customElements.define('my-sample', Sample.CustomElementConstructor);
customElements.define('react-slds-card', Card.CustomElementConstructor);
customElements.define('react-slds-button', Button.CustomElementConstructor);

ReactDOM.render(<App />, document.getElementById('root'));
