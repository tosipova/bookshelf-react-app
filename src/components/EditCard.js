import React from 'react';
import '../css/EditCard.css';


// function EditCard(props) {
// props.removeCurrentBook, props.currentBook || const { currentBook, removeCurrentBook } = props;

function EditCard({ currentBook, removeCurrentBook, addBook, editBook }) {
    const defaultBookState = {
        title: '',
        author: [''],
        year: '',
        pages: ''
    };
    const [book, setBook] = React.useState(defaultBookState)
    // const [authors, setAuthors] = React.useState([])

    React.useEffect(() => {
        if (currentBook) {
            setBook(currentBook)
        }
    }, [(currentBook)])

    const onSubmit = (event) => {
        event.preventDefault()

        if (currentBook) {
            editBook(book)
        } else {
            addBook(book)
        }
    }

    const addAuthorField = () => setBook(prevBook => {
        return {
            ...prevBook,
            author: [...prevBook.author, '']
        }
    })

    return (
        <form onSubmit={onSubmit} className="edit-form">

            <label htmlFor="book">Book New</label>
            <input
                id="book"
                type="text"
                value={book.title}
                onChange={(event) => {
                    setBook({ ...book, title: event.target.value })
                }}
            />

            {book.author.map((author, idx) => {
                return (
                    <>
                        <label htmlFor="new authors" key={idx}>Author</label>

                        <input
                            type="text"
                            value={author}
                            name={idx}
                            onChange={(event) => {
                                const myUpdatedAuthors = [...book.author]
                                myUpdatedAuthors[idx] = event.target.value
                                setBook({ ...book, author: myUpdatedAuthors })
                            }}
                        />
                    </>

                )
            })
            }
            <button onClick={addAuthorField}> + </button>

            <label htmlFor="year">Year</label>
            <input
                id="year"
                type="text"
                value={book.year}
                onChange={(event) => {
                    setBook({ ...book, year: event.target.value })
                }}
            />

            <label htmlFor="pages">Pages count</label>
            <input
                id="pages"
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