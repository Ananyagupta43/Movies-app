import React from "react";
import {data} from'../data';
import {addMovieToList,handleMoviesSearch} from '../actions';
class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showSearchResults:false,
            searchText:''
        }
    }
 
    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
    }

  
    handleChange=(e)=>{ // event object  as argument
       this.setState({
        searchText:e.target.value
       }); 
           }

    handleSearch=()=>{
    const {searchText}=this.state;  
     this.props.dispatch(handleMoviesSearch(searchText)); // action creator , will fetch data from server 
    }

    render(){
        const {result,showSearchResults}=this.props.search
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults &&
                    <div className="search-results">
                        <div  className="search-result">
                        <img src={result.Poster} alt="search-pic"/>
                        <div className="movie-info">
                            <span>{result.Title}</span>
                            <button onClick={()=>this.handleAddToMovies(result)}>Add to  Movies</button>

                        </div>
                        </div>
                    </div>
                    }
                </div>
                </div>
        )
    }
}

export default Navbar;
