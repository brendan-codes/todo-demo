import React from 'react';
import Todo from './Todo';

// all functional components take an object called props.
// props can be destructured to just the specific keys we're given
const TodoList = ({todos, toggleIsComplete, deleteHandler}) => {
    return (
        <div>
            { todos.map((val, i) =>
                    <Todo
                        key={i}
                        idx={i}
                        isComplete={val.isComplete}
                        description={val.description}
                        toggleIsComplete={toggleIsComplete}
                        deleteHandler={deleteHandler}
                    />
            )}
        </div>
    )
}

export default TodoList;