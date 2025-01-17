import React from 'react';
import SayHello from './SayHello.jsx';  // Import SayHello component

const App = () => {
  // Array of people to greet
  const people = [
    { id: 1, firstName: 'pasang', lastName: 'lama' },
    { id: 2, firstName: 'karma', lastName: 'Dolpo' },
    { id: 3, firstName: 'yang', lastName: 'oney' }
  ];

  return (
    <div>
      {/* Step 1: Use ternary operator to check if array is empty */}
      {people.length > 0 ? (
        // Step 2: Filter people with id greater than 2 and render using map
        people
          .filter(person => person.id > 2) // Only include people with id > 2
          .map((value) => (
            <SayHello person={value} key={value.id} />
          ))
      ) : (
        // Step 3: If no people are available, show "No records found"
        <h1>No records found</h1>
      )}
    </div>
  );
};

export default App;


