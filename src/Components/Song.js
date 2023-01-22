import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Song({ song }) {
  let navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/songs/${song.id}`);
      }}
    >
     
      <td className="Songs-Table">
       {song.name}
      </td>
      <td className="Songs-Table" >{song.artist}</td>
      <td className="Songs-Table">{song.time}</td>
      <td className="favorite Songs-Table">{song.is_favorite ? "👍" : "👎"}</td>
    </tr>
  );
}
