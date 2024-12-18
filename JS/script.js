// RENDER BOOKS //
function renderBooks() {
  const booksRef = document.getElementById("content");
  if (!booksRef) {
    console.error(
      "Error: booksRef not found. Make sure the #content element exists in the DOM.",
    );
    return;
  }

  books.forEach((book, index) => {
    addBookCard(booksRef, book, index);
  });
}

function addBookCard(booksRef, book, index) {
  booksRef.innerHTML += getBookCardTemplate(book, index);
}

// ADD COMMENTS //
function addComment(bookIndex) {
  const inputField = document.getElementById(`commentInput${bookIndex}`);
  const commentText = inputField.value.trim();

  if (commentText) {
    updateComments(bookIndex, commentText);
    clearInput(inputField);
  }
}

function updateComments(bookIndex, commentText) {
  const newComment = { name: "GuestUser1", comment: commentText };
  books[bookIndex].comments.push(newComment);
  prependComment(bookIndex, getNewComment(newComment));
}

function prependComment(bookIndex, newCommentHTML) {
  const commentsList = document.getElementById(`commentsList${bookIndex}`);
  commentsList.innerHTML = newCommentHTML + commentsList.innerHTML;
}

function clearInput(inputField) {
  inputField.value = "";
}

// TOGGLE LIKE //
function toggleLike(heartElement) {
  const likesElement = heartElement.parentElement.querySelector(".likes");
  const likes = parseInt(likesElement.textContent.trim(), 10);

  heartElement.classList.toggle("liked");
  updateLikes(likesElement, likes, heartElement.classList.contains("liked"));
}

function updateLikes(likesElement, likes, isLiked) {
  likesElement.textContent = isLiked ? likes + 1 : likes - 1;
}
