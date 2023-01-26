import { useNavigate } from "react-router-dom";
export default function Song({
  song: { id, artist, time, is_favorite, name },
}) {
  let navigate = useNavigate();
  return (
    <tr
      onClick={() => {
        navigate(`/songs/${id}`);
      }}
    >
      <td className="Songs-Table">{name}</td>
      <td className="Songs-Table">{artist}</td>
      <td className="Songs-Table">{time}</td>
      <td className="favorite Songs-Table">{is_favorite ? "👍" : "👎"}</td>
    </tr>
  );
}
