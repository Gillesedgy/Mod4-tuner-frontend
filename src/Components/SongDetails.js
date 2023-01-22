import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./songDetails.css";
const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSong] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then(
        (response) => setSong(response.data),
        (error) => navigate("*")
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, navigate]);

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.warn("catch", c));
  };

  // DELETE
  const handleDelete = () => {
    deleteSong();
  };
  // HANDLE DELETE

  return (
    <>
      <table className="Show-Table">
        <div>
          <th>Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Time</th>
          <th>Favorite</th>
          <tr>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>
            <td>{song.time}</td>
            <td>{song.is_favorite ? "👍" : "👎"}</td>
          </tr>
        </div>
      </table>
      <div className="Show-button">
        <div>
          <Link to={`/songs`}>
            <button className="showNav">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button className="showNav">Edit</button>
          </Link>
        </div>
        <div>
          <button className="showNav" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
