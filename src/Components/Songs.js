import axios from "axios";
import Song from "./Song";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./songs.css";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);
  //!
  const { id } = useParams();

  const handleAdd = (newSong) => {
    axios
      .post(`${API}/albums/${id}/songs`, newSong)
      .then(
        (res) => {
          setSongs([res.data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/albums/${id}/songs/${id}`)
      .then(
        (response) => {
          const copySongsArray = [...songs];
          const indexDeletedSong = copySongsArray.findIndex((song) => {
            return song.id === id;
          });
          copySongsArray.splice(indexDeletedSong, 1);
          setSongs(copySongsArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSong) => {
    axios
      .put(`${API}/albums/${id}/songs/${updatedSong.id}`, updatedSong)
      .then((response) => {
        const copySongsArray = [...songs];
        const indexUpdatedSong = copySongsArray.findIndex((song) => {
          return song.id === updatedSong.id;
        });
        copySongsArray[indexUpdatedSong] = response.data;
        setSongs(copySongsArray);
      })
      .catch((c) => console.warn("catch", c));
  };
  // handle submit

  //! To Get Songs per album
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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
              <th className="favorite">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song}  handleDelete={handleDelete} handleSubmit={handleEdit}/>;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
