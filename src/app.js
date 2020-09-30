import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/landing';

const container = document.getElementById('main');

if (container) {
  ReactDOM.render(<App/>, container);
}

console.log(process.env.NODE_ENV, ' MODE IN REACT');
