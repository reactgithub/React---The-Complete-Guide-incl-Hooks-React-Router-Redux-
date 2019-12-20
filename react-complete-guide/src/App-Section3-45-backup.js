import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// VS CODE SHORTCUTS
// Ctrl + / adds or removes comments from all of the highlighted text in VS code.
// Ctrl + Shift + L selects all occurances of the current selection

// App.js is the core React component in a React application.
// The render method rendors JSX to the screen.
// Sometimes .js files use .jsx instead.
// React.createElement is called behind the scenes to create each html element such as div, h1, span, etc.  JSX simplifies this.

// className is used instead of class because class is a keyword in JavaScript.  'className' will be converted to 'class' when the JSX is rendered to HTML.
// dot slash (./) is used when importing a relative file.
// The .js can be omitted from an import statement because it is added by the build workflow.
// The name and age attributes defined by the Person component will be available to the Person component through props.
// props are passed from outside of a component, but state is managed from within the component
// 'this' refers to the current component (class) in React so it can be used to refer to anything contained in the state object.

// Event handlers in JSX are camel case as opposed to being all lowercase in regular JavaScript
// Event Handlers are usually named so that they end with 'Handler' by convention
// The () are left off of the event handler so that it does not execute when it is loaded.

// state is never changed using an assignment (=) operator, always use this.setState()
// setState will merge with the existing state object so that the entire object does not need to be updated at once.
// Only two things update the DOM, chaning state and changing props

// FUNCTIONAL COMPONENTS
// Functional components have no render method.
// Hooks all being with 'use' in their import statements such as 'useState'
// useState returns an array with two elements
// The first element is always the current state and the second element is a function that allows us to update the state in a way that allows it to rerender.
// ES6 object destructuring [] allows you to pull elements out of an array that you get back from the right side of the equal sign.
// React Hooks allows state to be updated using functional components instead of class based components, but it overwrites the state object rather than merges.
// useState can be used multiple times so there are many objects rather than a single state object.

// Stateful Component is a component that manages state whether it uses the class based approach or useState (Hooks).
// Stateless Componenents, also called dumb components or presentational components have no state management
// Stateless components should always be used when possible to minimize cpu load


const app = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value'
    });

    const[otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; always use setState()
      setPersonsState({
        persons: [
          { name: 'Maximilan', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      })
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>MyHobbies: Racing</Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
      </div>
    );
  }


export default app;
