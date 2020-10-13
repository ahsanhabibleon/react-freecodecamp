import React, {useState} from 'react';

const ErrorExample = () => {
  let title = "useState error example";
  const [text, setText] = useState("Random Title");
  const changeTitle = function () {
    if(text === 'Random Title') {
      setText("New Title")
    }
    else {
      setText('Random Title')
    }
  }
  return (
    <div>
      <h2>{text}</h2>
      <button className="btn" type="button" onClick={changeTitle}>Change Title</button>
    </div>
  )
};

export default ErrorExample;
