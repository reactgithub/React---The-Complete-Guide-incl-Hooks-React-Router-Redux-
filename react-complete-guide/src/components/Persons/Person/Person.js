import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-type';

import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

// ref, like key, is a special property that can be passed into a component
// Using ref only works in class based components
class Person extends Component {

  //componentDidMount() {
  //  this.inputElement.focus();
  //}

  // ref={(inputEl) => {this.inputElement = inputEl}}

  render() {
    console.log('[Person.js] rendering...')
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3"
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </Fragment>
    );
  }
}

// Research PropTypes
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// JSX must have a single root element unless using JSX fragments (an array of adjacent elements may also work if a key is provided)
// Remeber that props are accessed with the 'this' keyword in class based components
// It is convention to capitalize the class identifier






