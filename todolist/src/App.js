import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
// components are imported by the same name they're exported by
import Create from './components/Create';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// there is only one App()
function App() {

    // useState returns a variable and a setter.
    // whatever we pass into use state acts as a default value
    // useState can hold strings "", objects {}, and arrays []
    // state variables are read only and can only be changed with
    // the specific setter we get when calling useState()

    // try to put state variables first

    const [todos, setTodos] = useState([{
      description: "Create Defaults",
      isComplete: false
    },
    {
      description: "Show Defaults",
      isComplete: true
    }
    ])

    // this is a change for the git demo

  // useEffect when passed an anonymous function will
  // run once the page is loaded. use it to call an
  // api with either fetch() or axios.get()

  // put useEffect right after state

  // useEffect(() => {

  //  // fetch.then().then().catch()
  //  // focus on where the data comes in as what we want.
  //  // a lot of this is just boilerplate code you always need
  //  // but look closely at the second response

  //   fetch("https://pokeapi.co/api/v2/pokemon/").then(
  //     response => {
  //       console.log(response);
  //       return response.json()
  //   }).then(
  //     response => {
  //       console.log(response);
            // our data is here!!
  //       console.log(response.results);
  //       setPokemon([...response.results]);
  //     }
  //   ).catch(
  //     err => {
  //       console.log(err)
  //     }
  //   )

  //  // axios is more simple to use but requires installation.
  //  // make sure to run npm install axios before using.

  //   axios.get("https://pokeapi.co/api/v2/pokemon/")
  //     .then(response => {
  //       console.log(response.data.results);
  //     })

  // });







  // event handlers can be passed from parent components to child components
  // to easily allow children access to the state variables declared on the parent

  // put your event handlers just before your JSX

  const toggleIsComplete = (idx) => {
    const copyTodos = [...todos]; // the ... spread operator returns all the values
                                  // of the previous array, effectively copying it

    const selectedTodo = copyTodos[idx];
    selectedTodo.isComplete = !selectedTodo.isComplete;

    setTodos(copyTodos);
  }

  const deleteHandler = (idx) => {
    setTodos(todos.filter((todo, i) => i !== idx));  // .filter returns a new array
  }


  return (
    <div className="App">
      <Create todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} toggleIsComplete={toggleIsComplete} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
