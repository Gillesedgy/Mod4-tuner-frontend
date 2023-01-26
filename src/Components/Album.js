import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Song({
  album: { title, released_year, id, genre, length },
}) {
  let navigate = useNavigate();
  return (
    <>
    <tr
      onClick={() => {
        // TODO: Must change this to use albums instead of songs 
        navigate(`/albums/${id}`);
      }}
    >
      <td className="Songs-Table">{title}</td>
      <td className="Songs-Table">{released_year}</td>
      <td className="Songs-Table">{length}</td>
      <td className="Songs-Table">{genre}</td>
      {/* <td className="favorite Songs-Table">{song.is_favorite ? "👍" : "👎"}</td> */}
     
    </tr> 
    </>
   
  );
}
