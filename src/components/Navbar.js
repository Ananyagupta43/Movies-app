import React from "react";

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showSearchResults:true,
            searchText:''
        }
    }
 
    handleAddToMovies=(movies)=>{
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
    }

    render(){
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
