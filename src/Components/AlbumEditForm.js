import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function AlbumEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState({
    title: "",
    released_year: "",
    length: "",
    genre: "",
  });
  const updatealbum = (updatedAlbum) => {
    axios
      .put(`${API}/albums/${id}`, updatedAlbum)
      .then(
        () => {
          navigate(`/albums/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/albums/${id}`)
      .then((response) => setAlbum(response.data))
      .catch((error) => console.log(error));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatealbum(album, id);
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

        <br />
        <input type="submit" />
      </form>
      <button className="Back-Button" onClick={() => navigate(`/albums/${id}`)}>
        Back
      </button>
    </div>
  );
}
