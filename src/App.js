import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: 'elisa', age: 25 },
            { name: 'max', age: 15 },
            { name: 'Jim', age: 35 }
        ],
        otherState: 'other value not being changed by setState'
    }

    switchNameHandler = () => {
       // console.log('clicked')
        //ALWAYS use this.setState() METHOD
        //setState takes an object as argument and merge what is defined with the existing state
        this.setState({
            persons: [
                { name: 'elisa', age: 25 },
                { name: 'max', age: 15 },
                { name: 'Jim', age: 35 }
                ]
        //DO NOT DO IT IN THIS WAT
        //select the first element in the array and change the value
        //this.state.persons[0].name = 'elisabeth'
    } )
    }

render(){
  return (
    <div className="App">
      <h1>Hi i am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is painting</Person>
        <Person/>
    </div>
  );
}
}

export default App;
