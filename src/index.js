import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import App from './components/App';
import movie from './reducers';


const store=createStore(movie);
console.log(store);
// console.log('STATE Before',store.getState());

// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'Superman'},
//            {name:'Spiderman'}]

// })
// console.log('STATE after',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    < App store={store} />
 
);

