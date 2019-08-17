import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// The attributes assigned to the Person component get passed down as props.
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stepahnie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // setState() is the only way to update state!
    this.setState({persons: [
      { name: newName, age: 30},
      { name: 'Manu', age: 29},
      { name: 'Stepahnie', age: 26}
      ]
    } );
  }

  // click is just the name of the property arbitrarily defined, not a reserved keyword for an event handler
  // Using this syntax onClick={() => this.switchNameHandler('myNewValue')} can cause uneccesarry re-renders, use bind() if possible.
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} >Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
