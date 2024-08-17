import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import './index.css'; // Import the CSS file

function TaskItem({ task, toggleTaskCompletion, updateTask, deleteTask }) {
  const taskTitleStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed ? '#aaa' : '#333',
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        className="complete-checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className="task-title" style={taskTitleStyle}>
        {task.title}
      </span>
      <div className="task-labels">
        {task.labels.map((label, index) => (
          <span key={index} className="task-label">
            {label}
          </span>
        ))}
      </div>
      <div className="task-buttons">
        <button className="task-button" onClick={() => updateTask(task)}>
          <MdEdit />
        </button>
        <button className="task-button" onClick={() => deleteTask(task.id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;