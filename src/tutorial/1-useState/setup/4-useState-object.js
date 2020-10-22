import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: "Duha", age: 1, message: 'I love you!'})
  const changeMessage = () => {
    setPerson({...person, message:'new message'})
  }
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button onClick={changeMessage}>change message</button>
    </div>
  )
};

export default UseStateObject;
