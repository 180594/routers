
import MovieList from './components/MovieList';
import NewMovie from './components/AddMovie';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Details from './components/Details';
import Navigation from './components/Navigate';



  const App = () => {
    const [movie, setMovie] = useState([        {
              Title: "Star War",
              ID: "001",
              rating: "meduim",
              Poster: "https://fr.web.img6.acsta.net/pictures/22/10/24/17/14/4700907.jpg"
          },
          {
            Title: "yew years",
            ID: "002",
            rating: "best",
            Poster: "https://images.epagine.fr/434/9782221138434_1_75.jpg"
          },
          {
            Title: "hello kitty",
            ID: "003",
            rating: "best",
            Poster: "https://upload.wikimedia.org/wikipedia/en/1/1a/LoveAndMonstersPoster.jpeg"
          }]);

          
       
          const[filtre,setFiltre] = useState('');

   const handleFiltre=(filtreValue)=>{
   setFiltre(filtreValue)
   }

   let filtredMovie = movie.filter((item)=>{
    if(filtre ==="" || filtre === undefined){
      return movie
    }
    return item.Title === filtre
    
   })
 
  const CreateMovie =(values)=>{
    const newMovie ={
      Id: Date.now(),
      Title: values.Title,
      Poster: values.Poster
    }
    setMovie([...movie,newMovie])
  }

  const removeMovie =(ID)=>{
   setMovie(movie.filter((item)=> item.ID !== ID))
  }

  return (

    <div >
			<div >
        <Navigation handleFiltre={handleFiltre}/>
        <Routes>
        <Route path="/" element={<MovieList movies ={filtredMovie} removeMovie={removeMovie}/>}/>
        <Route path="/detail/:title" element={< Details movies={movie} />}/>
         <Route path="/add" element ={<NewMovie CreateMovie={CreateMovie}/>}/>
         </Routes> 


			</div>

		
      
    </div>
  )
}

export default App;
