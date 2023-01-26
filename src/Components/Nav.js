import { Link } from "react-router-dom";
import './nav.css'
export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/albums">Tunner</Link>
      </h1>
      <button className="Nav-Button">
        <Link to="/albums/new"> New Song</Link>
      </button>
    </nav>
  );
}
