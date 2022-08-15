import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies,addFavMovies,showMovieTab} from '../actions/index'

class App extends React.Component {
   componentDidMount(){
    //make an api call
    //dispatch an action over here
    const { store }=this.props; 
    store.subscribe(()=>{
     //console.log('new update'); 
     this.forceUpdate();
    })
   // console.log(this.props.store.getState());
        store.dispatch(addMovies(data));  
  // console.log(this.props.store.getState());
     }

     isAddedToFav=(movie)=>{
      const {favourites}=this.props.store.getState();
      const index=favourites.indexOf(movie);
      if(index!==-1){
        //movie is already added to fav
        return true;
      }
      return false;
     }


    //  changeTab=(val)=>{
    //  if(this.globalFav===true){
    //   this.globalFav=false;
    //   console.log(true);
    //  }else{
    //   this.globalFav=true;
    //   console.log(false);
    //  }
    
    //  }

    addMovies=()=>{
      const { store }=this.props; 
      store.dispatch(showMovieTab(false)); 
    }

    changeFavMovies=()=>{
       const { store }=this.props; 
      store.dispatch(showMovieTab(true)); 
    }
    
    render() {
    const {list,favourites,showMovies} = this.props.store.getState();   // {list:[] favourites:[]}   
      // console.log(this.props.store.getState());
  // const {favourites}=this.props.store.getState(); 
    const displayMovies=showMovies?favourites:list
  return (
      <div className="App" style={styles.App}>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showMovies ? '' : 'active-tabs'}`} onClick={this.addMovies}>Movies</div>
            <div className={`tab ${showMovies ? 'active-tabs' : ''}`} onClick={this.changeFavMovies}>Favourites</div>
          </div>
          <div className="list">   {/*This is a list each movie cart will come inside this. */}
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie} 
              key={`movies-${index}`}  
              dispatch={this.props.store.dispatch} 
              isFav={this.isAddedToFav(movie)} />
            ))}        {/* Each data inside data file is considered as a movie and it will be an object  */}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  App: {
    backgroundColor: "#a71920"
  }
}

export default App;
