import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">The home page of the Dynamic User Availability and Event Scheduling System offers a clean, intuitive interface for users to log in, set their availability, and access key features. It includes easy navigation, a brief introduction, and clear calls to action, all designed for responsiveness and accessibility using Tailwind CSS.</h2>
      <p className="mb-4">Please sign in to manage your availability and organize events.</p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-600 text-white py-2 px-4 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded">Register</Link>
      </div>
    </div>
  );
}

export default Home;
