const API_URL = 'https://bookshelf-api-42.herokuapp.com/api/v1/books'

export function fetchBook() {
  return fetch(API_URL)
    .then(response => response.json())
    .then((bookResult) => {
      console.log(bookResult)
      return bookResult
    })
}

export function removeBook(id) {
  const API_URL_SINGLE_BOOK = `${API_URL}/${id}`;
  return fetch(API_URL_SINGLE_BOOK, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error;
      }
    })
};

export function addBook(title, author, year, pages) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      year,
      pages
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      console.log(response.status);
    })
}

export function editBook(id,author, title, pages, year) {
  const API_URL_SINGLE_BOOK = `${API_URL}/${id}`;
  return fetch(API_URL_SINGLE_BOOK, {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      year,
      pages
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error;
      }
    })
};
