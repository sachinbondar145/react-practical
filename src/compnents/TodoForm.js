import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core'

function TodoForm(props) {
  const { onSubmit, edit } = props;
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {edit ? (
        <div>
          <input
            value={input}
            onChange={handleChange}
            ref={inputRef}
          /> &emsp;
          <Button variant='outlined' color='primary' onClick={handleSubmit} >
            Update
          </Button>
        </div>
      ) : (
        <>
          <input
            placeholder='Add Task'
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />&emsp;
          <Button variant='outlined' color='primary' onClick={handleSubmit}>
            Add
          </Button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
