// {
//     type:'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

//action types
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES'
export const SHOW_MOVIES='SHOW_MOVIES'
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT'

//action creators
export function addMovies(movies){
    return{
            type:ADD_MOVIES,
            movies:movies
         }
  
}

export function addFavMovies(movies){
    return{
            type:ADD_FAVOURITES,
            movies:movies
         }
  
}

export function removeFavMovies(movies){
    return{
            type:REMOVE_FROM_FAVOURITES,
            movies:movies
         }
  
}

export function showMovieTab(val){
    return{
            type:SHOW_MOVIES,
           val:val
         }
  
}

//handleAddToMovies=(movies)=>

export function addMovieToList(movie){
    return{
            type:ADD_MOVIE_TO_LIST,
           movie:movie
         }
  
}

export function handleMoviesSearch(movie){
    const url=`https://www.omdbapi.com/?t=${movie}&apikey=addyourkeyhere`
  
    //dispatch an action 
return function(dispatch){   
     fetch(url)
    .then(response=>
        response.json()).then(movie=>{
         
        //dispatch an action 
      dispatch(addMovieSearchResult(movie))
    })
}
}


export function addMovieSearchResult(movie){
    return{
        type: ADD_SEARCH_RESULT,
       movie:movie
     } 
}

