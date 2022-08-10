import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies} from '../actions/index'

class App extends React.Component {
   componentDidMount(){
    //make an api call
    //dispatch an action over here
    const { store }=this.props; 
    store.subscribe(()=>{
     console.log('new update'); 
     this.forceUpdate();
    })
    console.log(this.props.store.getState());
        store.dispatch(addMovies(data))
   console.log(this.props.store.getState());
     }
  render() {
    const {list} = this.props.store.getState();   // {list:[] favourites:[]}   
       console.log(this.props.store.getState());
    return (
      <div className="App" style={styles.App}>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">   {/*This is a list each movie cart will come inside this. */}
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
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
