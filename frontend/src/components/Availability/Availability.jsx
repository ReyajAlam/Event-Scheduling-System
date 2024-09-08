import React, { useState } from 'react';

function Availability() {
  const [availability, setAvailability] = useState([]);

  const handleAddAvailability = () => {
    setAvailability([...availability, { day: '', start: '', end: '' }]);
  };

  const handleAvailabilityChange = (index, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = value;
    setAvailability(updatedAvailability);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Availability submitted:', availability);
    
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Set Your Availability</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {availability.map((slot, index) => (
          <div key={index} className="space-y-2">
            <div>
              <label className="block text-gray-700">Day:</label>
              <input
                type="text"
                value={slot.day}
                onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Time:</label>
              <input
                type="time"
                value={slot.start}
                onChange={(e) => handleAvailabilityChange(index, 'start', e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">End Time:</label>
              <input
                type="time"
                value={slot.end}
                onChange={(e) => handleAvailabilityChange(index, 'end', e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddAvailability}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Add Availability
        </button>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit Availability
        </button>
      </form>
    </div>
  );
}

export default Availability;
