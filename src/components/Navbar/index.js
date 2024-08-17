import React from 'react';
import { FaPlus } from 'react-icons/fa'; // Create Task icon
import './index.css'; // Import your CSS file

function Navbar({ onCreateTaskClick }) {
  return (
    <nav className="navbar">
      <img src="https://i.postimg.cc/26sX7wWr/Screenshot-2024-08-17-121544.png" alt="logo" className='task-logo' />
      <button className="create-task-button" onClick={onCreateTaskClick}>
        <FaPlus /> Create Task
      </button>
    </nav>
  );
}

export default Navbar;
