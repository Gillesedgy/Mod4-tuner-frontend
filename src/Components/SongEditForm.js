import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data)
   
    ).catch((error) => console.log(error))
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };
  return (
    <div className="Edit">
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
      <Link to={`/songs/${id}`}>
        <button className="Back-Button">Back</button>
      </Link>
    </div>
  );
}
