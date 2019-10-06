import React from 'react';

const person = (props) => {
    //if state or props change react rerender dom where it needs to be updated
    return (
        <div>
            <p>i'm a {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
        </div>
        )


};


export default person;