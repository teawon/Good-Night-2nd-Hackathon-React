import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import AddMovie from "pages/AddMovie";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/create-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
