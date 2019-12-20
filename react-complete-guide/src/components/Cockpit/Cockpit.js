import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

  // The second argument in useEffect is an array containing data that will trigger useEffect when that data has changed
  // useEffect can be used many times so that different events can be triggered when the specified data is changed.
  // Passing an empty array to useEffect as the second argument will cause it to only trigger when rendered for the first time or unmounted
 

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  // This useEffect will run for every update cycle because there is no second argument
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
};

// Wrapping the default output of a hooks based component uses Memoization to determine if cockpit has changed 
// React.memo uses Memoization to improve performance of functional components
// It is not a good idea to always use shouldComponentUpdate() on Class based components or React.memo() on functional components.
// If a component always needs to update when a parent updates, then shouldComponentUpdate() and React.memo() will cause unnecessary code executation and should not be used.
export default React.memo(cockpit);


