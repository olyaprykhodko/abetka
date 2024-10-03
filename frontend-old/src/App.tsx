import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Teachers from './components/Teachers';
import About from './components/About';
import Lessons from './components/Lessons';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-teacher" element={<Teachers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
