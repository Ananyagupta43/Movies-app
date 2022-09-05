import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore,applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// here we are using currying for logger with {obj,next,action} as arguments

// const logger=function({dispatch,getStatus}){
// return function(next){
//     return function(action){
//        //middleware code
//        console.log('ACTION_TYPE '+action.type ) 
//     next(action);   // this is equivalent to calling another middleware 
//     }
// }
// }       //it will console log the action type

        const logger=({dispatch,getStatus})=>(next)=>(action)=>{   //middleware modification
            // console.log('ACTION_TYPE '+action.type ) 
            next(action);
        }
    
    //    const thunk=({dispatch,getStatus})=>(next)=>(action)=>{   //middleware for differentiating the ation from function before it reaches reducer
    //         // console.log('ACTION_TYPE '+action.type ) 
    //        if(typeof action==='function'){
    //         action(dispatch);   
    //        }
    //         next(action);
    //     }


const store=createStore(rootReducer,applyMiddleware(logger,thunk));
//console.log(store);
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

