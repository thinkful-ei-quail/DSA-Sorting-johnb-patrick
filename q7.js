function shuffleArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let temp = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = temp
  }
  return arr
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))