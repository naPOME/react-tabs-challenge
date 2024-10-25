import React, { useState } from 'react';
import Tabs from './components/Tabs';
import { useFetchData } from './hooks/fetchData';
import './App.css';

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabEndpoints = [
    'https://cors-anywhere.herokuapp.com/https://loripsum.net/api/1/medium/plaintext',
    'https://cors-anywhere.herokuapp.com/https://loripsum.net/api/2/medium/plaintext',
    'https://cors-anywhere.herokuapp.com/https://loripsum.net/api/3/medium/plaintext',
    'https://cors-anywhere.herokuapp.com/https://loripsum.net/api/4/medium/plaintext',
  ];

  const { data, isLoading, error } = useFetchData(tabEndpoints[activeTabIndex]);

  return (
    <div>
      <a  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className='link'>
        learn react
      </a> 
      
      <Tabs activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />

      <div className="tab-content">
        {isLoading && <div>Loading content...</div>}
        {error && <div>Error fetching content: {error.message}</div>}
        {!isLoading && !error && <div>{data}</div>}
      </div>
    </div>
  );
};

export default App;
