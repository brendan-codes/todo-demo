import React, {useState} from 'react';


const Create = ({todos, setTodos}) => {

    // state variable to run the form.
    // forms cant run without a variable to hold the data that the form
    // is changing.
    const [newTodoDesc, setNewTodoDesc] = useState("")

    // handler for submitting the forum
    const handleSubmit = (event) => {
        event.preventDefault();

        setTodos([
            ...todos,
            {
                description: newTodoDesc,
                isComplete: false
            }
        ])

        setNewTodoDesc("");
    }


    // for our input onChange, we call our setter to update the state variable
    // currently pointed at the form.
    return (
        <div>
            <div>
                { newTodoDesc }
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodoDesc} onChange={event => setNewTodoDesc(event.target.value)}></input>
                <input type="submit" value="Please create a todo!"></input>
            </form>
        </div>
    )
}

// make sure you export
export default Create;