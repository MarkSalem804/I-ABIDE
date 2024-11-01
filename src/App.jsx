import './App.css';
import Login from './pages/Auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
