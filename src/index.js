import React from 'react';
// Can also say import {Component} from 'react'; 
// and then it'd be class StorePicker extends Component
import {render} from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css'; 


render(<App/>, document.querySelector('#main'));