import React from 'react';
import TaskItem from '../TaskItem';
import './index.css'; // Import the CSS file

function TaskList({ tasks, updateTask, deleteTask, filterLabel, labels, addLabel, toggleTaskCompletion }) {
  const filteredTasks = filterLabel
    ? tasks.filter((task) => task.labels.includes(filterLabel))
    : tasks;

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
