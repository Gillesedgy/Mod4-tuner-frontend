import axios from "axios";
import Song from "./Song";
import { useEffect, useState } from "react";
import './songs.css'

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  // AXIOS
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Songs">
      <section>
        <table >
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
              <th className="favorite" >Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
