function getBookCardTemplate(book, indexBook) {
  return `<div
          class="flex flex-col items-center w-[30rem] h-[50rem] bg-soft-cream rounded-3xl border-4 border-dark-burgundy"
        >
            ${getBookCardHeader(book)}
            ${getBookCardInformation(book)}

          <section class="flex-1 flex flex-col w-full px-6 py-4">
            <h3>Kommentare:</h3>
            <ul class="table w-full flex-1">
              <li class="table-row">
                <span class="table-cell w-[30%] border p-2 text-center"
                  >Row 1, Col 1</span
                >
                <span class="table-cell border p-2 text-center"
                  >Row 1, Col 2</span
                >
              </li>
              <li class="table-row">
                <span class="table-cell border p-2 text-center"
                  >Row 2, Col 1</span
                >
                <span class="table-cell border p-2 text-center"
                  >Row 2, Col 2</span
                >
              </li>
              <li class="table-row">
                <span class="table-cell border p-2 text-center"
                  >Row 3, Col 1</span
                >
                <span class="table-cell border p-2 text-center"
                  >Row 3, Col 2</span
                >
              </li>
            </ul>
            <div class="flex">
              <input
                class="w-full"
                type="text"
                placeholder="Schreibe deinen Kommentar..."
              />
              <svg class="w-[2.75rem] h-[2.75rem] ml-2 fill-midnight-blue">
                <use
                  xlink:href="./assets/icons/sprite.svg#icon-circle-right"
                ></use>
              </svg>
            </div>
          </section>
        </div>`;
}

function getBookCardHeader(book) {
  return `
            <h2
                class="h-[5rem] w-full py-4 text-center border-b-2 border-dark-burgundy shadow-xl"
            >
                ${book.name}
            </h2>
            <section class="flex justify-center items-center h-[13rem] w-full border-b-2 border-dark-burgundy">
            <div class="p-2 bg-dark-burgundy">
                <img src=${book.image} alt="book image" />
            </div>
          </section>`;
}

function getBookCardInformation(book) {
  return `
            <section class="flex flex-col h-[14rem] w-full px-6 border-b-2 border-dark-burgundy py-6">
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-amber-yellow p-2">
                        ${book.price.toFixed(2)}€
                    </span>
                    <div class="flex items-center">
                        <span class="text-2xl text-midnight-blue">
                            ${book.likes}
                        </span>
                        <svg class="w-[2.75rem] h-[2.75rem] ml-2 fill-gray-500">
                            <use xlink:href="./assets/icons/sprite.svg#icon-heart"></use>
                        </svg>
                     </div>
                </div>
            <div>
              <ul class="table w-fit">
                <li class="table-row">
                    <span class="table-cell  p-2 text-left">
                         Author
                    </span>
                    <span class="table-cell  p-2 text-left">
                        : ${book.author}
                    </span>
                </li>
                <li class="table-row">
                    <span class="table-cell  p-2 text-left">
                        Year of publication
                    </span>
                    <span class="table-cell  p-2 text-left">
                        : ${book.publishedYear}
                    </span>
                </li>
                <li class="table-row">
                    <span class="table-cell border p-2 text-left">
                        Genre
                    </span>
                    <span class="table-cell border p-2 text-left">
                        : ${book.genre}
                    </span>
                </li>
              </ul>
            </div>
          </section>`;
}
