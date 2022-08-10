import {ADD_MOVIES,ADD_FAVOURITES} from '../actions';

const initialMovieState={
    list:[],
    favourites:[]
}
export default function movie(state=initialMovieState,action){
// if(action.type===ADD_MOVIES){
//     return {...state,list:action.movies}
// }
// return state;

switch(action.type){
   case ADD_MOVIES:
    return {...state,list:action.movies} 
    case ADD_FAVOURITES:
        return {...state,favourites:[action.movies,...state.favourites]}  // adding the fav movie at first index and spreading rest of the movies at all the indexes 
}                                          //...state.fav describe movies that are already present in the fav array 


}

// we will move this to other file 
// const ADD_MOVIES='ADD_MOVIES' // rather than string comparisons we will use this variable