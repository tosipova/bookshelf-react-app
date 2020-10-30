import React, { useEffect, useState } from 'react';
import { fetchBook, removeBook } from '../services/fetch-book';
import BookItem from './BookItem'
import '../css/BookItem.css'
function UserBooks() {

  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetchBook().then(
      bookResult => {
        setBooksList(bookResult)
      }
    );
  }, [])

  const removeBookFromServer = (id) => {
    removeBook(id)
      .then(() => {
        return fetchBook()
      })
      .then(booksList => {
        setBooksList(booksList)
      })
  }

  
  return (
    <div className="row">

      {booksList.map((item, idx) => {

        return <BookItem key={idx} onDelete={() => removeBookFromServer(item._id)} {...item} />
      })}

    </div>
  );
}

export default UserBooks;

