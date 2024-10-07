import React, { useState } from 'react';
import './ToDo.css';
const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    const addTask = () => {
        if(newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

  return (
    <div className='todo-container'>
        <h1>To-Do List</h1>
        <input type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add a task' />

        <button onClick={addTask}>Add</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task} <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ToDo;
