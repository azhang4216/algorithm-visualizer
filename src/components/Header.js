import React from 'react';

const Header = ({ algorithm, setAlgorithm, speed, setSpeed, generateNewArray, startSorting }) => {
  
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Sorting Algorithm Visualizer</h1>
      
      <div style={controlContainerStyle}>
        {/* algorithm selection drop-down */}
        <div>
          <label style={labelStyle} htmlFor="algorithm">Algorithm:</label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={handleAlgorithmChange}
            style={selectStyle}
          >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="quickSort">Quick Sort</option>
            <option value="insertionSort">Insertion Sort</option>
          </select>
        </div>

        {/* slider controlling speed of visualization */}
        <div>
          <label style={labelStyle} htmlFor="speed">Speed:</label>
          <input
            type="range"
            id="speed"
            min="1"
            max="100"
            value={speed}
            onChange={handleSpeedChange}
            style={rangeStyle}
          />
        </div>

        {/* button for generating new array */}
        <button onClick={generateNewArray} style={buttonStyle}>Generate New Array</button>
        <button onClick={startSorting} style={buttonStyle}>Start Sorting</button>
      </div>
    </header>
  );
};

// Inline styles
const headerStyle = {
  padding: '20px',
  backgroundColor: '#f1f1f1',
  borderBottom: '2px solid #ddd',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const controlContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#f8f8f8',
  borderRadius: '5px',
};

const labelStyle = {
  marginRight: '10px',
  fontSize: '16px',
};

const selectStyle = {
  padding: '5px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const rangeStyle = {
  width: '150px',
  marginLeft: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#61dafb',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default Header;
