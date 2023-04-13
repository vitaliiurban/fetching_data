import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import './App.css';

function App() {
  const [id, setId] = useState({});
  console.log('App');
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home id={id} setId={setId} />} />
        <Route path="/posts" element={<Posts id={id} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
