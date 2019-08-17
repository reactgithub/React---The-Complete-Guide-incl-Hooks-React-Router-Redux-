import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// The attributes assigned to the Person component get passed down as props.
const app = props => {
  // The [] perform array destructuring
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stepahnie', age: 26}
    ],
  });

  // This persists when the button triggers a state update because it's a different state object
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
      { name: 'Maximilian', age: 30},
      { name: 'Manu', age: 29},
      { name: 'Stepahnie', age: 26}
      ]
    } );
  }
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}


export default app;

