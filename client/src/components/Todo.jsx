import React from 'react';

function Todo (props) {
  return (
    <div>
      <li>
        <button onClick={() => props.delete(props.index)}>Delete</button>
        {props.todo.todo}
      </li>
    </div>
  )
}

export default Todo;