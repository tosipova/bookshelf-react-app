import React from 'react';
import BookItem from './components/BookItem';
import EditCard from './components/EditCard';
import { addBook as addBookToServer, fetchBook, removeBook as removeBookFromServer, editBook as editBookOnServer } from './services/fetch-book';

function App({ booksList, setBooksList }) {

  const [currentBook, setCurrentBook] = React.useState();
  const removeCurrentBook = () => {
    setCurrentBook(undefined)
  }

  const removeBook = (id) => {
    removeBookFromServer(id)
      .then(() => {
        setBooksList(booksList.filter(item => item._id !== id))
      })
  }

  const addBook = (book) => {
    addBookToServer(book)
      .then(() => {
        return fetchBook()
      })
      .then(newBookList => {
        setBooksList(newBookList)
      })
  }

  const editBook = (book) => {
    editBookOnServer(book)
      .then(() => {
        return fetchBook()
      })
      .then(newBookList => {
        setBooksList(newBookList)
      })
  }

  const onClickEditBook = (id) => {
    const currentBook = booksList.find((item) => {
      return item._id === id;
    })
    setCurrentBook(currentBook)
  }

  return (
    <div className="row">
      <EditCard currentBook={currentBook}
        removeCurrentBook={removeCurrentBook}
        addBook={addBook}
        editBook={editBook} />
      <div className="row">
        {booksList.map((item, idx) => {
          return <BookItem key={idx} onDelete={() => removeBook(item._id)}
            onEdit={() => onClickEditBook(item._id)} {...item}
          />
        })}
      </div>
    </div>
  );
}

export default App;
