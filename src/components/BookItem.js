import React from 'react';
import '../css/BookItem.css'
import { addBook } from '../services/fetch-book';

function BookItem({ title, author, year, pages, onDelete, addBook }) {

    return (
        <div className="book-item">
            <div className="column1"> {title} </div>
            <div className="column2"> {author} </div>
            <div className="column3"> {year} </div>
            <div className="column4"> {pages} </div>

            <button className="item-save-button" onClick={addBook}> Edit Book </button>
            <button className="item-delete-button" onClick={onDelete}>Delete</button>

        </div>
    )
};

export default BookItem;