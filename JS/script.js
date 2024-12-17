// STORE BOOKS //

// SHOW BOOKS //
function renderBooks() {
  const booksRef = document.getElementById("content");
  //   booksRef.innerHTML = "";

  books.forEach((book, bookIndex) => {
    booksRef.innerHTML += getBookCardTemplate(book, bookIndex);
  });
}

// ADD COMMENTS //

function addComment(bookIndex) {
  const inputField = document.getElementById(`commentInput${bookIndex}`);
  const commentText = inputField.value.trim();

  if (commentText) {
    // Create the new comment object
    const newComment = {
      name: "GuestUser1",
      comment: commentText,
    };

    // Add the new comment to the beginning of the book's comments array
    books[bookIndex].comments.push(newComment); // .push will add it to the end of the array (unshif to the beginning)

    // Generate the new comment HTML using the function --> from template.js
    const newCommentHTML = getNewComment(newComment);

    // Append the new comment to the beginning of the comments list
    const commentsList = document.getElementById(`commentsList${bookIndex}`);
    commentsList.innerHTML = newCommentHTML + commentsList.innerHTML; // Add the new comment at the top of the list

    // Clear the input field after the comment is added
    inputField.value = "";
  } else {
    alert("Please enter a valid comment.");
  }
}
