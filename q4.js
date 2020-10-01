function mSort(arr) {
  if(arr.length <= 1 ) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mSort(arr.slice(0, middle));
  const right = mSort(arr.slice(middle, arr.length));
  return merge(left, right, arr);
}

function merge(arr1, arr2, arr) {
  let a1Index = 0;
  let a2Index = 0;
  let resIndex = 0;
  while(a1Index < arr1.length || a2Index < arr2.length) {
    if(a1Index >= arr1.length) {
      arr[resIndex] = arr2[a2Index];
      a2Index++;
      resIndex++;
    }
    else if(a2Index >= arr2.length) {
      arr[resIndex] = arr1[a1Index];
      a1Index++;
      resIndex++;
    }
    else {
      const arr1Val = arr1[a1Index];
      const arr2Val = arr2[a2Index];
      if(arr1Val > arr2Val) {
        arr[resIndex] = arr2Val;
        a2Index++;
      }
      else {
        arr[resIndex] = arr1Val;
        a1Index++;
      }
      resIndex++;
    }
  }
  return arr;
}

console.log(
  mSort([
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