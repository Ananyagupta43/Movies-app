import {ADD_MOVIES} from '../actions';

const initialMovieState={
    list:[],
    favourites:[]
}
export default function movie(state=initialMovieState,action){
if(action.type===ADD_MOVIES){
    return {...state,list:action.movies}
}
return state;
}

// we will move this to other file 
// const ADD_MOVIES='ADD_MOVIES' // rather than string comparisons we will use this variable