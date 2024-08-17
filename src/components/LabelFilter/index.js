import React from 'react';
import './index.css'

function LabelFilter({ labels, setFilterLabel }) {
  return (
    <div className="label-filter">
      <select onChange={(e) => setFilterLabel(e.target.value)} defaultValue="">
        <option value="">All Tasks</option>
        {labels.map((label, index) => (
          <option key={index} value={label}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LabelFilter;
