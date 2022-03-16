import React from 'react';
import firebase from './fbConfig';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ todo }) {

    const onComplete = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
          complete: !todo.complete,
       });
    };
    const onDelete = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    };

    
    return (
        <>
            <ul>
                <li>
                    {todo.title}
                    <button onClick={onComplete}>Complete</button>
                    <button onClick={onDelete}>Delete</button>
                </li>
            </ul>
        </>
    );
}

export default Todo;