// STORE BOOKS //

// SHOW BOOKS //
function renderBooks() {
  const booksRef = document.getElementById("content");
  //   booksRef.innerHTML = "";

  books.forEach((book, indexBook) => {
    booksRef.innerHTML += getBookCardTemplate(book, indexBook);
  });
}
