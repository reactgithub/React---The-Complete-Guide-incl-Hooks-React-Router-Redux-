import React from 'react';


// It is a convention to put higher-order components into an hoc (higher order component) folder.
// It is a convention to name higher order components start with the word 'With' such as WithClass.js
// Using a wrapper such as this is useful in putting error handling around http requests and other side effects
// Higher order components are used for wrapping some kind of functionality around a component.

// HIGHER-ORDER COMPONENT METHOD #1
// const withClass = props => (
//     <div className={props.classes}>{props.children}</div>
// );

// export default withClass;

// HIGHER-ORDER COMPONENT METHOD #2
// The className style being used in the div comes from the second argument passed to withClass

// The spread operator {...props} is being used to pass in props because without using the spread operator a new props value called props will be assigned.
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;
