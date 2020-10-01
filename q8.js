function sortBooks(books) {
  let orderedBooks = []
  for(let i = 0; i < books.length; i++) {
    let insertIndex = 0
    for(insertIndex; insertIndex < orderedBooks.length; insertIndex++) {
      if(books[i] < orderedBooks[insertIndex]) {
        break;
      }
    }
    orderedBooks.splice(insertIndex, 0, books[i])
  }
  return orderedBooks
}

console.log(sortBooks(['book 5', 'book 2', 'book 4', 'book 3', 'book 1']))