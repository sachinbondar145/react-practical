import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { Edit, Delete } from '@material-ui/icons';
import { Typography, Box } from '@material-ui/core'

const Todo = (props) => {
  const { todos, completeTodo, removeTodo, updateTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    todos.map((todo, index) =>
      <table style={{ margin: 'auto' }}>
        <tr>
          <td>
            <Box
              key={index}
              style={{ display: 'inline-flex' }}
            >
              <Box style={{ padding: '5px' }}>
                <Typography key={todo.id} onClick={() => completeTodo(todo.id)}>
                  {todo.text}
                </Typography>
              </Box>
              <Box >
                <Edit
                  color='primary'
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                />
                <Delete
                  color='secondary'
                  onClick={() => removeTodo(todo.id)}
                />
              </Box>
            </Box>
          </td>
        </tr>
      </table>
    ));
};

export default Todo;
