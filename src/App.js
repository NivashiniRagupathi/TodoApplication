import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LabelFilter from './components/LabelFilter';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [labels, setLabels] = useState(() => {
    const savedLabels = localStorage.getItem('labels');
    return savedLabels ? JSON.parse(savedLabels) : [];
  });

  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filterLabel, setFilterLabel] = useState('');
  const [isTaskFormVisible, setTaskFormVisible] = useState(false); // State for form visibility

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('labels', JSON.stringify(labels));
  }, [labels]);

  const addTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map((t) => (t.id === taskToEdit.id ? task : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTaskFormVisible(false); // Hide form after adding task
  };

  const updateTask = (task) => {
    setTaskToEdit(task);
    setTaskFormVisible(true); // Show form for editing task
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addLabel = (label) => {
    if (!labels.includes(label)) {
      setLabels([...labels, label]);
    }
  };

  const handleCreateTaskClick = () => {
    setTaskFormVisible(true); // Show form when button is clicked
    setTaskToEdit(null); // Reset taskToEdit
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };


  return (
    <div className="app">
      <Navbar onCreateTaskClick={handleCreateTaskClick} />
      {isTaskFormVisible && (
        <TaskForm
          addTask={addTask}
          labels={labels}
          addLabel={addLabel}
          taskToEdit={taskToEdit}
        />
      )}
      <LabelFilter labels={labels} setFilterLabel={setFilterLabel} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        filterLabel={filterLabel}
        toggleTaskCompletion={toggleTaskCompletion} // Ensure this is passed correctly
      />

    </div>
  );
}

export default App;