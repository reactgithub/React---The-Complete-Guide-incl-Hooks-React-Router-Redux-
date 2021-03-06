import React from 'react';

// props.changed triggers this.nameChangedHandler in App.js
// The Failed form propType warning in the console is a false alarm.
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;