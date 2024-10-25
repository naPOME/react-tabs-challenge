
import React from 'react';
import '../App.css'
const Tabs = ({ activeTabIndex, setActiveTabIndex }) => {
  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  return (
    <div className="tabs">
      {tabLabels.map((label, index) => (
        <button
          key={index}
          className={`tab-button ${activeTabIndex === index ? 'active' : ''}`}
          onClick={() => setActiveTabIndex(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
