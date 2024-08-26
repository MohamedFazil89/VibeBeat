import React , { useState} from "react";
import './App.css';
import MusicCard from "./Components/MusicCard"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SongList from "./Data.js";


function App() {
  const [currentSong, setCurrentSong] = useState(0);

  const Song = SongList[currentSong];

  const NextSong = () =>{
    setCurrentSong((prev) =>( prev === SongList.length - 1 ? 0 : prev + 1));
   
  }

  const PrevSong = () =>{
    setCurrentSong((prev) =>( prev === 0 ? 0 : prev - 1))
  
  }

  return (
    <div className="App">
      <MusicCard  Drift={Song} Next={NextSong} Prev={PrevSong}/>
      <IoIosArrowBack className='Back' onClick={PrevSong}/>
      <IoIosArrowForward className='Front' onClick={NextSong}/>
    </div>
       );
}

export default App;
