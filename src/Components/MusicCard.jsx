import React, { useState, useRef, useEffect } from "react";
import "./Style/Card.css";
import { FaMusic, FaSpotify, FaSkyatlas, FaPlay, FaPause } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function Card({ Drift, Next, Prev }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = Drift.path;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [Drift, isPlaying]);

  const handlePlayPause = (e) => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

 

  return (
    <div className="card" >
      <div className="Text-side">
        <h2>{Drift.name}</h2>
        <p>song by {Drift.artist}</p>
        <h3>Stream on</h3>
        <section>
          <span><SiYoutubemusic className="YT" /></span>
          <span><FaMusic className="Music" /></span>
          <span><FaSpotify className="Spotify" /></span>
          <span><FaSkyatlas className="Sky" /></span>
        </section>
      </div>
      <div className="Image">
        <div className="background"></div>
        <img src={Drift.image} alt="Music" />
        <div className="PlayButton">
          {isPlaying ? (
            <FaPause className="Play" onClick={handlePlayPause} />
          ) : (
            <FaPlay className="Play" onClick={handlePlayPause} />
          )}
        </div>
        {/* <input type="text" onKeyUp={(e) => console.log(e.key)} /> */}
      </div>
      <audio ref={audioRef}  /> 
    </div>
  );
}
