import React from "react";
import { addFavMovies,removeFavMovies } from "../actions";

class MovieCard extends React.Component{
 
    handleFavouriteClick=()=>{
      const {movie}=this.props;
      this.props.dispatch(addFavMovies(movie));
    }

    handleUnfavouriteClick=()=>{ 
        const {movie}=this.props;
      this.props.dispatch(removeFavMovies(movie)); 
     
    }

    render(){
        const {movie,isFav}=this.props;
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
                    { isFav
                    ? <button className="unfavourite-btn" onClick={this.handleUnfavouriteClick} >Unfavourite</button>
                    :  <button className="favourite-btn" onClick={this.handleFavouriteClick} >Add to Favourite</button>

                }
                </div>
                              
               </div>
                </div>
        )
    }
}

export default MovieCard;
