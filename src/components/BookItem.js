import React from 'react';
import '../css/BookItem.css'



function BookItem(props) {
    const { title, author, year, pages, onDelete, onEdit } = props;

    return (
        <div className="book-item">
            <div > {title} </div>
            <div > {author} </div>
            <div > {year} </div>
            <div > {pages} </div>


            <button onClick={onEdit}> Edit Book </button>
            <button onClick={onDelete}>Delete</button>

        </div>
    )
};

export default BookItem;