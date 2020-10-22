import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const getNewSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', getNewSize);
    return () => {
      console.log('Cleanup');
      window.removeEventListener('resize', getNewSize)
    }
  });

  console.log('render');

  return <h2>{size}</h2>;
};

export default UseEffectCleanup;
