// Generate 100 random integers
function generateRandomNumbers() {
  let numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  return numbers;
}

// Display numbers on the webpage
function displayNumbers(numbers, elementId) {
  document.getElementById(elementId).innerText = numbers.join('; ');
}

// Implement Quick Sort
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[Math.floor(arr.length / 2)];
  let low = arr.filter(val => val < pivot);
  let middle = arr.filter(val => val === pivot);
  let high = arr.filter(val => val > pivot);
  return [...quickSort(low), ...middle, ...quickSort(high)];
}

// Implement Merge Sort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}

// Implement Bubble Sort
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = len-1; i >= 0; i--) {
    for(let j = 1; j <= i; j++) {
      if(arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// Generate numbers and display them
let numbers = generateRandomNumbers();
displayNumbers(numbers,'unsorted');

// Add event listeners to buttons
document.getElementById('quickSortButton').addEventListener('click', function() {
  let sorted = quickSort([...numbers]);
  displayNumbers(sorted, 'sorted');
});

document.getElementById('mergeSortButton').addEventListener('click', function() {
  let sorted = mergeSort([...numbers]);
  displayNumbers(sorted, 'sorted');
});

document.getElementById('bubbleSortButton').addEventListener('click', function() {
  let sorted = bubbleSort([...numbers]);
  displayNumbers(sorted, 'sorted');
});