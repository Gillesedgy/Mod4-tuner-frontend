import { Link } from "react-router-dom";
import './nav.css'
export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Tunner</Link>
      </h1>
      <button className="Nav-Button">
        <Link to="/songs/new"> New Song</Link>
      </button>
    </nav>
  );
}
