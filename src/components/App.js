import React from "react";
import {data} from '../data';
import  Navbar from './Navbar';
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App" style={styles.App}>
    <Navbar/>
    <div className="main">
      <div className="tabs">
      <div className="tab">Movies</div>
      <div className="tab">Favourites</div>
      </div>
      <div className="list">   {/*This is a list each movie cart will come inside this. */}
    {data.map((movie,index)=>(   
             <MovieCard movie={movie} key={'movies${index}'}/> //using this to make key unique
      ))}        {/* Each data inside data file is considered as a movie and it will be an object  */}
      </div>
    </div>
    </div>
  );
}

const styles={
  App:{
   backgroundColor:"#a71920"
  }
}

export default App;
