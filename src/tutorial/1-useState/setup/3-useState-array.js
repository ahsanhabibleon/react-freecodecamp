import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <React.Fragment>
      {
        people.map(person => {
          const {id, name} = person
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <button onClick={() => removePerson(id)}>Remove</button>
            </div>
          )
        })

      }
      <button className="btn" onClick={() => setPeople([])}>Clear all</button>
    </React.Fragment>
  )
};

export default UseStateArray;
