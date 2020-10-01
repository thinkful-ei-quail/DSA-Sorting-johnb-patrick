// IMPLEMENTING QUICK SORT //

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

// function partition(arr, start, end) {
//   // return middle index (where pivot ended up)
//   if (start >= end) {
//     return arr;
//   }
//   let pivot = Math.floor((start + end) / 2);
//   let pivotValue = arr[pivot];
//   console.log(arr, start, end, pivot, arr[pivot]);

//   let j = end - 1;
//   let i = start;
//   while (j > i) {
//     while (!(arr[i] >= pivotValue)) {
//       i++;
//     }
//     while (!(arr[j] < pivotValue)) {
//       j--;
//     }
//     swap(arr, i, j);
//   }
//   swap(arr, pivot, j);
//   return j;
// }

// function qSort(arr, start = 0, end = arr.length) {
//   if (start >= end) {
//     return arr;
//   }

//   let middle = partition(arr, start, end);
//   qSort(arr, start, middle);
//   qSort(arr, middle + 1, end);
//   return arr;
// }

console.log(
  qSort([
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5,
  ])
);
