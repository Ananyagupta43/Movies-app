import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import movie from './reducers';
import { createStore } from 'redux';

const store=createStore(movie);
console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);

