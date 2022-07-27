import {useState} from 'react';
import './App.css';
import AddNewMovie from './Components/AddNewMovie';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import { moviesData } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Infos from './Components/Infos';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
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
      <Router>
      <AddNewMovie handleAdd={handleAdd}/>
      <SearchBar text={text} rating={rating} handleChange={handleChange} handleRating={handleRating}/>
        <Routes>
          <Route path="/"element={

      <MovieList data={movies.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&el.rating<=rating)} deleteMovie={handleDelete}/>

          }/>
      <Route path="/infos/:id" element={<Infos data={movies}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
