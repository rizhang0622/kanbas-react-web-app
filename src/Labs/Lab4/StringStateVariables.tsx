import React, { useState } from 'react';

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState('John');

  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      {/* import useState */}
      {/* declare and
    // initialize
    // state variable */}
      {/* render string */}
      <input
        className="form-control"
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}