import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file

function TaskForm({ addTask, labels = [], addLabel, taskToEdit }) {
  const [title, setTitle] = useState('');
  const [labelInput, setLabelInput] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setSelectedLabels(taskToEdit.labels || []); // Default to empty array if labels is undefined
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (labelInput.trim() !== '' && !selectedLabels.includes(labelInput)) {
      setSelectedLabels([...selectedLabels, labelInput]);
      if (!labels.includes(labelInput)) {
        addLabel(labelInput);
      }
    }

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      completed: taskToEdit ? taskToEdit.completed : false,
      labels: selectedLabels.includes(labelInput)
        ? selectedLabels
        : [...selectedLabels, labelInput],
    };

    addTask(newTask); // This function should handle both add and update
    setTitle('');
    setSelectedLabels([]);
    setLabelInput('');
  };

  const handleLabelInputChange = (e) => {
    setLabelInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <input
        type="text"
        value={labelInput}
        onChange={handleLabelInputChange}
        placeholder="Type a label"
        list="label-options"
      />
      <datalist id="label-options">
        {labels.map((label, index) => (
          <option key={index} value={label} />
        ))}
      </datalist>
      <div className="selected-labels">
        {selectedLabels.map((label, index) => (
          <span key={index} className="task-label">
            {label}
          </span>
        ))}
      </div>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;