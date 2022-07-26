import {combineReducers}  from 'redux'

import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FROM_FAVOURITES,SHOW_MOVIES,ADD_SEARCH_RESULT,ADD_MOVIE_TO_LIST} from '../actions';

const initialMovieState={
    list:[],
    favourites:[],
    showMovies:true
}
export function movie(state=initialMovieState,action){
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
        state.favourites= [...state.favourites].filter(element=>element!==action.movies)
        return {...state,favourites:[...state.favourites]}
      case SHOW_MOVIES:
      return{...state,showMovies:action.val} 
      case ADD_MOVIE_TO_LIST:
        return {...state,list:[action.movie,...state.list]}   
        default:
            return state;
}                                          //...state.fav describe movies that are already present in the fav array 


}

const initailSearchState = {
  result:{},
  showSearchResults:false 

};
export function search (state=initailSearchState,action){
  switch(action.type){
    case ADD_SEARCH_RESULT:
     return {...state,
      result:action.movie,
      showSearchResults:true 
    }
    case ADD_MOVIE_TO_LIST:
      return {...state,showSearchResults:false}   
      default:
          return state; 
 }
  
  return state;
}

const initialRootState = {
  movies:initialMovieState,
  search:initailSearchState
};
// export default function rootReducer (state=initialRootState,action){
//   return {
//     movies:movie(state.movies,action),   //rootreducer will have the movies reducer and search reducer inside it
//     search:search(state.search,action)
//   };
// }

export default combineReducers({
  movies:movie,
  search:search
})
// we will move this to other file 
// const ADD_MOVIES='ADD_MOVIES' // rather than string comparisons we will use this variable