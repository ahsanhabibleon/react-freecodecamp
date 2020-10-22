import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect!")
    document.title = `New title ${value}`
  })

  const reset = () => {
    setValue(oldval => oldval + 1);
    // document.title = `New title ${value}`
  }


  console.log('Hellow world!')
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={reset}>Click me</button>
    </>
  )
};

export default UseEffectBasics;
