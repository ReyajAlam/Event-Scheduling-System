import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Availability from './components/Availability/Availability.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen max-w-screen-lg py-14 mx-64 flex flex-col">
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1>Event Scheduling System</h1>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/availability" element={<Availability />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
