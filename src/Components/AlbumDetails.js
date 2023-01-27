import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./songDetails.css";
//!
import Songs from "../Components/Songs";

const API = process.env.REACT_APP_API_URL;

export default function AlbumDetails() {
  const [album, setAlbum] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/albums/${id}`)
      .then(
        (response) => {
          // console.log(response.data)
          setAlbum(response.data);
        },
        (error) => navigate("*")
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, navigate]);

  // DELETE
  const deleteAlbum = () => {
    axios
      .delete(`${API}/albums/${id}`)
      .then(() => {
        navigate(`/albums`);
      })
      .catch((c) => console.warn("catch", c));
  };
  // HANDLE DELETE

  const handleDelete = () => {
    deleteAlbum();
  };

  return (
    <>
      <table className="Show-Table">
        <thead>
          <tr></tr>
          <th>Title</th>
        <th>Released Year</th>
        <th>Length</th>
        <th>Genre</th>
        {/* <th>Favorite</th> */}
        </thead>
        
        <tr>
          <td>{album.title}</td>
          <td>{album.released_year}</td>
          <td>{album.length}</td>
          <td>{album.genre}</td>
          {/* <td>{album.is_favorite ? "👍" : "👎"}</td> */}
        </tr>
      </table>
      <div className="Show-button">
        <div>
          <Link to={`/albums`}>
            <button className="showNav">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/albums/${id}/edit`}>
            <button className="showNav">Edit</button>
          </Link>
        </div>
        <div>
          <button className="showNav" onClick={handleDelete}>
            Delete
          </button>
          {/* //TODO: add the songs component  */}
          <Songs />
        </div>
      </div>
    </>
  );
}
