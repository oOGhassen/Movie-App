import {useState} from 'react';
import './App.css';
import AddNewMovie from './Components/AddNewMovie';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import { moviesData } from './data';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const handleChange=(y)=>{
    setText(y)
  }
  const handleRating=(z)=>{
    setRating(z)
  }
    //to delete a Movie
  const handleDelete=(id)=>{
    setMovies(movies.filter(movies=>movies.id!==id))
  }
  //to add new Movie
  const handleAdd=(newMovie)=>{
    setMovies([...movies ,newMovie])
  }
  return (
    <div className="App">
      <SearchBar text={text} rating={rating} handleChange={handleChange} handleRating={handleRating}/>
      <MovieList data={movies.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&el.rating<=rating)} deleteMovie={handleDelete}/>
      <AddNewMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
