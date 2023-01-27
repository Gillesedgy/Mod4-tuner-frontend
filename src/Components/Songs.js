import axios from "axios";
import Song from "./Song";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './songs.css'

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);
  //! 
  const {id} = useParams()

  //  TODO: AXIOS -- adding the new data from songs 
const handleAddSongs =(newSongs)=>{
  axios.post(`${API}/albums/${id}/songs`, newSongs).then((response)=>{
    setSongs([response.data, ...songs])
  }, (error)=> console.log(error)).catch((err)=> console.warn(err))
}

// handle submit



  useEffect(() => {
    axios
      .get(`${API}/albums/${id}/songs`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="Songs">
      <section>
        <h2>Songs</h2>
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
