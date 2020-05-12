import React from "react";

// the name of components must be the same as the export
const Todo = ({idx, description, isComplete, toggleIsComplete, deleteHandler}) => {
    // on click and on change events call anonymous functions that are passed events.
    // inside these functions, we can call other functions, or we can write our own handlers

    // const handler = (event) => { blah blah blah }

    return (
        <div>
            <p> {description}</p>
            <p> {idx} </p>
            <p> Is Complete??: {isComplete.toString()}</p>
                <input
                    type="checkbox"
                    value={isComplete}
                    checked={isComplete}
                    onChange={event => toggleIsComplete(idx)}>
                </input>
                <button onClick={event => deleteHandler(idx)}>Delete</button>
        </div>
    )
}

// the export of components must be the same as the name.
export default Todo;