import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
const API = process.env.REACT_APP_API_URL;

export default function AlbumForm() {
  const navigate = useNavigate();
  const [album, setAlbum] = useState({
    title: "",
    released_year: "",
    length: "",
    genre: "",
    
  });
  const addAlbum = (newAlbum) => {
    axios
      .post(`${API}/albums`, newAlbum)
      .then(() => {
        navigate(`/albums`);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum(album);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          id="title"
          value={album.title}
          onChange={handleTextChange}
          placeholder="Title for this album"
          required
        />
        <label htmlFor="released_year">Released Year:</label>
        <input
          type="text"
          id="released_year"
          value={album.released_year}
          onChange={handleTextChange}
          placeholder="Year of release"
          required
        />
        <label htmlFor="length">Length(min):</label>
        <input
          type="text"
          id="length"
          value={album.length}
          onChange={handleTextChange}
          placeholder="Time in minutes"
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={album.genre}
          onChange={handleTextChange}
          placeholder="Hip-Hop/Rap, Dance/Electronic ... "
          required
        />

        {/* <label htmlFor="artist">Artist:</label>
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
        /> */}
        <br />
        <input type="submit" />
      </form>
      <button className="Back-Button" onClick={() => navigate("/albums")}>
        Back
      </button>
    </div>
  );
}
