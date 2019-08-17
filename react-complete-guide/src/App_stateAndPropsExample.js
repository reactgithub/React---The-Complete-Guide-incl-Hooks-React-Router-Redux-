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

  switchNameHandler = () => {
    // console.log('was clicked!');
    // setState() is the only way to update state!
    this.setState({persons: [
      { name: 'Maximilian', age: 30},
      { name: 'Manu', age: 29},
      { name: 'Stepahnie', age: 26}
      ]
    } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
