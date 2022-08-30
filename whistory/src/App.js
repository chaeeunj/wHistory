import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drama from './pages/Drama';
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
