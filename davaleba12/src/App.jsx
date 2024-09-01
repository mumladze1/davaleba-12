// import React,  { Component } from "react";
// import './App.css';
// import TaskList from './TaskList';

import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';






function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const finishTask = (index) => {
    const newTasks = [...tasks];
    const [completedTask] = newTasks.splice(index, 1);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const deleteTask = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
  };

  const redoTask = (index) => {
    const newCompletedTasks = [...completedTasks];
    const [redoTask] = newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
    setTasks([...tasks, redoTask]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter new task"
        onKeyPress={(event) => {
          if (event.key === 'Enter' && event.target.value.trim()) {
            addTask(event.target.value.trim());
            event.target.value = '';
          }
        }}
      />
      <div className="columns">
        <TaskList
          title="To Be Performed"
          tasks={tasks}
          handleTaskAction={finishTask}
          actionLabel="Finish"
        />
        <TaskList
          title="Completed Works"
          tasks={completedTasks}
          handleTaskAction={deleteTask}
          secondaryAction={redoTask}
          actionLabel="Delete"
          secondaryLabel="Redo"
        />
      </div>
    </div>
  );
}

export default App;
