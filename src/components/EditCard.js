import React from 'react';
import '../css/EditCard.css';


// function EditCard(props) {
// props.removeCurrentBook, props.currentBook || const { currentBook, removeCurrentBook } = props;

function EditCard({ currentBook, removeCurrentBook, addBook, editBook }) {
    const defaultBookState = {
        title: '',
        author: '',
        year: '',
        pages: ''
    };
    const [book, setBook] = React.useState(defaultBookState)

    const onSubmit = (event) => {
        event.preventDefault()

        if (currentBook) {
            editBook(book)
        } else {
            addBook(book)
        }
    }

    React.useEffect(() => {
        if (currentBook) {
            setBook(currentBook)
        }
    }, [(currentBook)])

    return (
        <form onSubmit={onSubmit} className="edit-form">

            <input
                type="text"
                value={book.title}
                onChange={(event) => {
                    setBook({ ...book, title: event.target.value })
                }}
            />
            <input
                type="text"
                value={book.author}
                onChange={(event) => {
                    setBook({ ...book, author: event.target.value })
                }}
            />
            <input
                type="text"
                value={book.year}
                onChange={(event) => {
                    setBook({ ...book, year: event.target.value })
                }}
            />
            <input
                type="text"
                value={book.pages}
                onChange={(event) => {
                    setBook({ ...book, pages: event.target.value })
                }}
            />
            <button> {currentBook ? 'Edit book' : 'Add book'} </button>

            {
                currentBook && <button
                    onClick={() => {
                        removeCurrentBook()
                        setBook(defaultBookState)
                    }}
                    type="button"

                >
                    Cancel
                     </button>
            }
        </form >
    )
};
export default EditCard;