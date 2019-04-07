import React, { useState } from 'react';

const getNames = i => {
  const names = ["John", "Jane", "Phil"];
  return names[i];
}
function Welcome() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName = (i) => getNames(i)] = useState('');


  return (
      <div>
      {console.log(name)}
      <p>{}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setName(count)}>
        Click me
      </button>
    </div>
  );
}

export default Welcome;