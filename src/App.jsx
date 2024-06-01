import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import About from './components/About'; // Nowy komponent
import NavBar from './components/NavBar'; // Komponent nawigacyjny

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
