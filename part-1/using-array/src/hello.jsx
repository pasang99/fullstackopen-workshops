import React from 'react';

// Step 3: SayHello component which destructures props
const SayHello = ({ person }) => {
  // Helper function to combine first and last name
  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  return (
    <div>
      {/* Step 3: Use the helper function inside JSX */}
      <p>Hello, {getFullName(person.firstName, person.lastName)}!</p>
    </div>
  );
};

export default SayHello;
