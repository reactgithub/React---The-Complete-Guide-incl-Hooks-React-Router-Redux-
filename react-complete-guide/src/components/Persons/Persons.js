import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {


    // PureComponent
    // PureComponents are normal components that automatically update shouldComponentUpdate with a complete props check
    // These are used rather than manually performing a complete set of props props changes in shouldComponentUpdate()
    // Using a PureComponent is just less code

    // COMMENTED OUT BECAUSE IT IS DEPRECATED
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // COMMENTED OUT BECAUSE IT IS DEPRECATED
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    // shouldComponentUpdate must return true or false
    /*
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        // This conditional statement only allows updates when the 'perons' component has been changed
        // This works despite persons being a reference object because persons is created using an immutability pattern
        // Using shouldComponentUpdate to render conditionally can improve performance
        // Turning on 'Paint Flashing' inside More tools > Rendering will cause chrome to flash the component green when it updates so you can see what updated.
        // The additional conditional statements will continue the update of any of the conditions are true, covering all potential scenarios
        // It is common to check if any of the props inside of a component have changed to determine of the component should be updated.
        if (
            nextProps.persons !== this.props.persons || 
            nextProps.changed !== this.props.changed || 
            nextProps.clicked !== this.props.clicked
            ) {
            return true;
        } else {
            return false;
        }
    }
    */

    getSnapShotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // COMMENTED OUT BECAUSE IT IS DEPRECATED
    // Often used incorrectly by developers
    // componentWillUpdate() {

    // }

    // Most commonly used lifecycle hook
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    
componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
}

    render() {
        console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
        return (
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)} />
            );
        });
    };
}

export default Persons;


