import React from 'react';
// Can also say import {Component} from 'react'; 
// and then it'd be class StorePicker extends Component
import {render} from 'react-dom';
import Router from './components/Router';
import './css/style.css'; 


render(<Router/>, document.querySelector('#main'));