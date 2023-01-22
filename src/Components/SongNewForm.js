import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'
const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={song.name}
          onChange={handleTextChange}
          placeholder="Title for this song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="Artist for this song"
          require
        />
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          value={song.album}
          onChange={handleTextChange}
          placeholder="Album for this song"
          required
        />
        <label htmlFor="time">Length:</label>
        <input
          type="text"
          id="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="00:00"
          required
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          type="checkBox"
          id="is_favorite"
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />
        <br />

        <input type="submit" />
      </form>
    <button className="Back-Button" onClick={()=> navigate('/songs')}>Back</button>
    </div>
  );
}
