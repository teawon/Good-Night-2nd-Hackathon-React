import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import MovieListPage from "./pages/MovieListPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies" element={<MovieListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
