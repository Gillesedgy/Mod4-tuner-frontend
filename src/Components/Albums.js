import axios from "axios";
import Album from "./Album";
import { useEffect, useState } from "react";
import "./songs.css";

const API = process.env.REACT_APP_API_URL;

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  // AXIOS
  useEffect(() => {
    axios
      .get(`${API}/albums`)
      .then((res) => {
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Albums">
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Released Year</th>
              <th>Length (min)</th>
              <th>Genre</th>
              {/* <th className="favorite" >Favorite</th> */}
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return <Album key={album.id} album={album} />;
            })}
          </tbody>
        </table>
      </section>
        <button></button>
        <button></button>
        <button></button>
    </div>
  );
}
