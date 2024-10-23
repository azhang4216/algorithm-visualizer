/* 
bubble sort explained: https://youtu.be/xli_FI7CuzA?si=AhnXKjRjyB9vNThp
- iterating through the array, we swap items at index i and i + 1 if array[i] > array[i + 1]
- we keep reiterating this until no swaps are made, which means we have sorted the array
- time: O(N^2), space: O(1) 
*/
export const bubbleSort = async (array, speed, setArray, setLeftIndex, setRightIndex) => {
    const n = array.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        // after each complete pass through the array, 
        // the largest unsorted element will have bubbled up to its correct position at the end of the array
        // so, the outer loop i helps us keep track of the last sorted elements we can ignore
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // highlight the current indices being compared
            setLeftIndex(j);
            setRightIndex(j + 1);

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;

                // update the visualizer with each swap
                setArray([...array]);
            }
            await new Promise((resolve) => setTimeout(resolve, speed));
        }
        // if no swaps have occurred, it means our array is sorted
        if (!swapped) break;
    }
};

/*
merge sort explained: 
- usually done recursively, ie. divide & conquer
- continuously divide the array in half until left with individual items
- merge smaller arrays into larger ones in sorted order
- time: O(Nlog(N)), space: O(N)
*/
export const mergeSort = async (array, speed, setArray, setLeftIndex, setRightIndex) => {
    // helper function for merging two sorted subarrays
    // start index refers to the index of left[0] in reference to the whole array
    const merge = async (left, right, startIndex) => {
        // left and right index refer to pointers for the merging process
        let leftIndex = 0;
        let rightIndex = 0;
        let sortedArray = [];

        // Highlight the current indices being merged
        setLeftIndex(startIndex + leftIndex);
        setRightIndex(startIndex + left.length + right.length);

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                sortedArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                sortedArray.push(right[rightIndex]);
                rightIndex++;
            }
            // update the visualizer with each step
            // we need to update the main array in the visualizer with our result from this part permanently,
            // otherwise going into another recursive step will switch our visualized array back to unsorted for this section.
            // that's why we need `setArray((prevArray) => [...])`, so that we do not directly override everything solved previously.
            // note: using an immediately invoked function expression in order to avoid warning about unsafe references in a loop
            (function (leftIndex, rightIndex) {
                setArray((prevArray) => [
                    ...prevArray.slice(0, startIndex), 
                    ...sortedArray, 
                    ...left.slice(leftIndex), 
                    ...right.slice(rightIndex), 
                    ...prevArray.slice(startIndex + left.length + right.length)
                ]);
            })(leftIndex, rightIndex);
            await new Promise((resolve) => setTimeout(resolve, speed));
        }
        // concatenate any remianing elements from both halves,
        // so that we can update the main array in the visualizer permanently
        const remainingArray = [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
        setArray((prevArray) => [
            ...prevArray.slice(0, startIndex), 
            ...remainingArray, 
            ...prevArray.slice(startIndex + remainingArray.length)
        ])

        // this logic works because anything left over in the left and right arrays 
        // must be bigger than our sorted array's biggest element
        // ie. there will only be one non-empty left / right array given the indexes,
        //     so order of left or right remaining arrays is arbitrary
        return remainingArray;
    }

    // recursive sorting function
    // start index refers to the index of arr[0] in reference to the whole array
    const sort = async (arr, startIndex) => {
        // base case
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = await sort(arr.slice(0, mid), startIndex);
        const right = await sort(arr.slice(mid), startIndex + mid);

        return await merge(left, right, startIndex);
    }

    const sortedArray = await sort(array, 0);

    // final update to the visualizer
    setLeftIndex(-1);
    setRightIndex(-1);
    setArray(sortedArray);        
};

export const quickSort = (array, speed, setArray) => {
// Sorting logic will go here
};

export const insertionSort = (array, speed, setArray) => {
// Sorting logic will go here
};
  