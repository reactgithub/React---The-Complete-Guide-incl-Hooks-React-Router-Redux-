import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props); // always call super(props) when creating a constructor
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false.name,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('{App.js] getDerivedStateFromProps', props);
    return state;
  }

  /* HAS BEEN DEPRECATED
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  */

  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
    // Used for side effects
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // SUPER IMPORTANT WHEN DEPENDING ON OLD STATE
    // this.state should not be used as an argument for setState because setState does not guarentee that the regular DOM will be updated.
    // INCORRECT: this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1  });
    // This may result in race conditions between competing states
    // For this reason this.state should never be referenced inside of a setState argument
    // Using prevState guarentees that you get the correct state when depending on old state

    this.setState((prevState, props) => { 
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1 
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Auxiliary classes={classes.App}> 
      <button
        onClick={() => {
          this.setState({ showCockpit: false });
        }}
      >
        Remove Cockpit</button>
      {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.persons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}  
        /> : null}
      {persons}
      </Auxiliary>
    );
    // The reason for passing in personsLength into the Cockpit component is that it can be conditionally rendered whenever the this.state.persons.length changes.
  }
}

// classes refers to the CSS modules classes
export default withClass(App, classes.App);


// NOTES

// VS CODE SHORTCUTS
// Ctrl + / adds or removes comments from all of the highlighted text in VS code.
// Ctrl + Shift + L selects all occurances of the current selection
// Ctrl + Alt + up or down key will insert cursor over the multiple lines.
// Shift + Alt + A Multiline comment toggle

// App.js
// App.js is the core React component in a React application.
// The render method rendors JSX to the screen.
// Sometimes .js files use .jsx instead.

// React.createElement
// React.createElement is called behind the scenes to create each html element such as div, h1, span, etc.  JSX simplifies this.

// CLASS BASED COMPONENTS
// When using a class based component be sure to use 'this' when accessing props (this.props.someProp) or state (this.state.someState)

// ERROR BOUNDARIES
// Only use error boundaries aound code that has intermittent failures that are outside of your control due to side effects
// this.props.children is useful for wrapping something inside of an error boundary
// When wrapping a class the key (used for indexing) needs to be moved to the wrapping component because it needs to be in the outer element.

// JAVASCRIPT KEYWORDS
// className is used instead of class because class is a keyword in JavaScript.  'className' will be converted to 'class' when the JSX is rendered to HTML.

// dot slash (./) is used when importing a relative file.
// The .js can be omitted from an import statement because it is added by the build workflow.
// The name and age attributes defined by the Person component will be available to the Person component through props.
// props are passed from outside of a component, but state is managed from within the component
// 'this' refers to the current component (class) in React so it can be used to refer to anything contained in the state object.

// EVENT HANDLERS
// Event handlers in JSX are camel case as opposed to being all lowercase in regular JavaScript
// Event Handlers are usually named so that they end with 'Handler' by convention
// The () are left off of the event handler so that it does not execute when it is loaded.

// ALWAYS USE setState()
// state is never changed using an assignment (=) operator, always use this.setState()
// setState will merge with the existing state object so that the entire object does not need to be updated at once.
// Only two things update the DOM, chaning state and changing props

// FUNCTIONAL COMPONENTS (Using Hooks)
// Functional components have no render method.
// Hooks all begin with 'use' in their import statements such as 'useState'
// useState returns an array with two elements
// The first element is always the current state and the second element is a function that allows us to update the state in a way that allows it to rerender.
// ES6 object destructuring [] allows you to pull elements out of an array that you get back from the right side of the equal sign.
// React Hooks allows state to be updated using functional components instead of class based components, but it overwrites the state object rather than merges.
// useState can be used multiple times so there are many objects rather than a single state object.

// STATELESS VS STATEFUL COMPONENTS
// Stateful Component is a component that manages state whether it uses the class based approach or useState (Hooks).
// Stateless Componenents, also called dumb components or presentational components have no state management
// Stateless components should always be used when possible to minimize cpu load

// FUNCTIONAL COMPONENTS
// const XY = props => {...}
// access to props (props.XY)
// access to state using useState()
// no lifecycle hooks

// CLASS BASED COMPOENTS
// class XY extends Component
// access to state and props via 'this' (this.state.XY & this.props.XY)
// access to state
// has lifecycle hooks

// Passing down an event handler as a property allows sub-components to call functions in parent components.

// CSS FILES
// CSS files need import statements to work
// Remember to use className instad of class when referring to the CSS class
// Unlike .js files CSS files also need the extension in the import statement

// INLINE CSS
// Putting CSS inside the render method is called using inline styles in React, this scopes the style to a single element
// Inline CSS styles don't allow pseudo selectors like hover
// Since CSS styles are assigned to JavaScript objects, they can be modified by JavaScript interactively

// USE IMMUTABLE PATTERNS WHEN POSSIBLE
// Using the spread operator such as in (const persons = [...this.state.persons];) creates a localized version of the array rather than a reference to an array.
// Spread operator is a more modern approach than using Object.assign()

// USE A KEY VALUE
// When mapping a list of values be sure to use a key property as it helps React perform updates efficiently 
// Don't use index because if an array value is deleted, the whole list will be re-indexed.
// The best way is to make sure add a unique identifier value to the array.
// The id or key value doesn't need to be a number, it just needs to be unique

// Object.assign vs Spread Operator
// Object.assign is an alternative approach to spread operator for implementing immutability
// const person = Object.assign({}, this.state.persons[personIndex]);
// Object.assign() copies values and properties from one or more source objects to a target object.

// JAVASCRIPT METHODS COMMONLY USED IN REACT
// findIndex() method
// Finds an element in an array and returns the index of that element
// Takes a function as an input (like map()), and performs the function on each element in the array.

// array.join
// join converts an array into a single string with the specified separator 
//  join the elements of an array into a string.The elements of the string will be separated by a specified separator

// BIND VS ANONYMOUS FUNCTION
// .bind controls what 'this' inside the function will refer to.  It binds the associated argument to 'this'.
// Using an anonymous function can be used inside of an event handler, ex: onClick={() => this.switchNameHandler(this, 'Maximilian')
// Use .bind when possible as it is more performant



// BUILT IN TERMINAL FEATURES
// The built in Terminal is useful because it automatically goes to the root directory of your application.

// HIGHER ORDER COMPONENT
// A component wrapping your component, adding some additional functionality

// RADIUM
// A styling component for React
// Radium enables the use of pseuco selectors such as hover 
// Allows the use of media queries by wrapping in a StyleRoor component

// STYLED COMPONENTS
// A styling component for React
// npm install --save styled-components
// Pseduo selector is preceeded with an ampersand

// TEMPLATE LITERALS
// uses backticks ` to define a multiline string that allows embedding expressions using the ${} syntax.

// ARROW FUNCTIONS
// For single line arrow functions the return statement can be omitted

// In its simplist form a component is just a function that returns some JSX.
// It is a convention to always use the same name as the file name and componentn name.
// In JSX curly braces {} can contain single line expressions.
// props provides access to properties defined inside of html tags.
// props.children refers to any elements between the opening and closing tags of our component.
// The div is used because JSX requires a single HTML element at the root of the component, unless using a JSX Fragment component.

// To call a function in a parent component from within a subcomponent, you need to pass a reference to a handler as a property to the component
// First you define the property in the parent and assign the function to it, and then call it from the sub-component.
// props.click refers to a property that was defined in the parent component that calls the switchNameHandler function
// props.changed and value={props.name} creates two-way binding

// COMPONENT LIFECYCLE
// constructor(props)
// getDerivedStateFromProps() - Added in 16.3
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()


// componentDidCatch()
// componentWillUnmount()
// shouldComponentUpdate()
// componentDidMount()



// constructor()
// always call super(props)
// Used to set up state
// Don't cause side effects (no http requests)

// getDerivedStateFromProps()
// Use static modifier (static getDerivedStateFromProps())
// use to sync State to Props
// don't cause side effects (no http requests)

// ShouldComponentUpdate(nextProps, nextState)
// Decides whether or not to continue (may cancel updating process)
// Can be used to improve performance by preventing unnecessary renders
// return statement must return true or false (based on conditional logic)

// render()
// Prepare & structure JSX code
// Updates child components

// getSnapshotBeforeUpdate(prevProps, prevState)
// Used for last minute DOM operations (such as resetting the scroll position)
// Don't use for side effects (http requests and such)

// componentDidUpdate()
// Put side effects here
// Don't update state (triggers re-render) (rare exception - update state with setState as a result of an asyncronous operation)






// componentDidMount
// Used for side effects
// Don't update state (triggers re-render)

