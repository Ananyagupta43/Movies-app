// {
//     type:'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }

//action types
export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES'
export const SHOW_MOVIES='SHOW_MOVIES'
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

