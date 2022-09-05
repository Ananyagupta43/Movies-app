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
        this.setState({
            showSearchResults:false 
        })
    }

  
    handleChange=(e)=>{ // event object  as argument
       this.setState({
        searchText:e.target.value
       }); 
           }

    handleSearch=()=>{
    const {searchText}=this.state;  
     this.props.dispatch(handleMoviesSearch(searchText)); // action creator , will fetch data from server 
     this.setState({
        showSearchResults:true 
    })
    }

    render(){
        const {showSearchResults}=this.state
        const {result}=this.props.search
        console.log(result);
        console.log("result");
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    
                </div>

                </div>
        )
    }
}

export default Navbar;
