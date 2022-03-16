import React, { useState } from 'react';
import firebase from './fbConfig';


function Form(){
  const [title, setTitle] = useState('');
 

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
    };
    if (title === '') {
      alert('Enter the task first');
    }
    else{
      todoRef.push(todo);
      setTitle('');
    }         
};
return (
    <>
      <div>
        <input type="text" placeholder="add a new task..." onChange={handleOnChange} value={title} />
       
        <button onClick={createTodo}>Add Todo</button>
      </div>
   
  </>
  );
}

export default Form;