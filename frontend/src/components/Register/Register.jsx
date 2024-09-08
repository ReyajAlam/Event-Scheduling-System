import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault(); 
    console.log('User registered:', email);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
