import React from 'react';

// array[leftIndex:rightIndex+1] will be colored a different color,
// to show that that is the portion of the array we are currently sorting
const ArrayVisualizer = ({ array, leftIndex, rightIndex }) => {
    return (
        <div style={containerStyle}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={barStyle(value, leftIndex, rightIndex, index)}
                >
                </div>
            ))}
        </div>
    );
}

// Inline styles for the array visualizer
const containerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '400px',
    width: '100%',
    margin: '20px 0',
    border: '1px solid #ddd',
    backgroundColor: '#f8f9fa',
};
  
const barStyle = (value, leftIndex, rightIndex, index) => ({
    width: '10px',
    height: `${value}px`,  // we dynamically adjust the height of the bar = numeric value of elemt
    backgroundColor: index >= leftIndex && index <= rightIndex ? 'red' : '#61dafb',
    margin: '0 2px',
    transition: 'height 0.2s ease',
});

export default ArrayVisualizer;