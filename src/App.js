// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Wave from './Pages/Wave'
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
// Albums
// import AlbumEdit from "./Pages/AlbumEdit";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";
import Error from "./Pages/Error";

// COMPONENTS
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
  
      <Router>
        <Wave/>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Index />} />
            <Route path="/albums/new" element={<New />} />
            <Route exact path="/albums/:id" element={<Show />} />
            <Route path="/albums/:id/edit" element={<Edit />} />
            {/* ALBUMS */}
            {/* <Route path="/albums" element={<ALbumIndex />} />
            <Route path="/albums/new" element={<NewAlbum />} />
            <Route exact path="/songs/:id" element={<ShowAlbum />} />
            <Route path="/albums/:id/edit" element={<AlbumEdit />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
