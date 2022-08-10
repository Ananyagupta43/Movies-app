import React from "react";
import { addFavMovies } from "../actions";

class MovieCard extends React.Component{
 
    handleFavouriteClick=()=>{
      const {movies}=this.props;
      this.dispatch(addFavMovies(movies));
    }

    render(){
        const {movie}=this.props;
        return(
            <div className="movie-card">
               <div className="left">
                <img alt="movie-poster" src={movie.Poster}/>
               </div>
               <div className="right">
    
                <div className="title">{movie.Title}</div>
                {/* <div>Description:</div> */}
                <div className="description">Description:</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating">
                        Rating: {movie.imdbRating}
                    </div>
                    <button className="favourite-btn">Add to Favourite</button>
                </div>
                              
               </div>
                </div>
        )
    }
}

export default MovieCard;
