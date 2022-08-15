import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FROM_FAVOURITES,SHOW_MOVIES} from '../actions';

const initialMovieState={
    list:[],
    favourites:[],
    showMovies:true
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
     case REMOVE_FROM_FAVOURITES:
        state.favourites= [...state.favourites].filter(element=>element!=action.movies)
        return {...state,favourites:[...state.favourites]}
      case SHOW_MOVIES:
      return{...state,showMovies:action.val}  
        default:
            return state;
}                                          //...state.fav describe movies that are already present in the fav array 


}

// we will move this to other file 
// const ADD_MOVIES='ADD_MOVIES' // rather than string comparisons we will use this variable