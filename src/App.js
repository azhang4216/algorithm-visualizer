import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ArrayVisualizer from './components/ArrayVisualizer';
import { bubbleSort, mergeSort, quickSort, insertionSort } from './components/SortingAlgorithm';


const App = () => {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [speed, setSpeed] = useState(50);
  const [array, setArray] = useState([]);

  // array[leftIndex:rightIndex + 1] will be colored differently,
  // to show that this is the portion of the array we are currently sorting / operating on
  const [leftIndex, setLeftIndex] = useState(-1);
  const [rightIndex, setRightIndex] = useState(-1);    

  // generates a random array for visualization
  const generateNewArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArray);
  };

  // handles sorting based on selected algorithm
  const startSorting = () => {
    // need a copy to trigger state updates, instead of editing in place
    const arrayCopy = [...array];

    switch (algorithm) {
      case 'bubbleSort':
        bubbleSort(arrayCopy, speed, setArray, setLeftIndex, setRightIndex);
        break;
      case 'mergeSort':
        mergeSort(arrayCopy, speed, setArray, setLeftIndex, setRightIndex);
        break;
      case 'quickSort':
        quickSort(arrayCopy, speed, setArray, setLeftIndex, setRightIndex);
        break;
      case 'insertionSort':
        insertionSort(arrayCopy, speed, setArray, setLeftIndex, setRightIndex);
        break;
      default:
        break;
    }
  }

  // this effect has no dependencies, so it should only run once when component mounts
  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div className="App">
      <Header
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        generateNewArray={generateNewArray}
        startSorting={startSorting}
      />
      <ArrayVisualizer array={array} leftIndex={leftIndex} rightIndex={rightIndex} />
    </div>
  );
}

export default App;
