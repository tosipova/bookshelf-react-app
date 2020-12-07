import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BookItem.css'



function BookItem(props) {
    const { title, author, year, pages, onDelete, onEdit } = props;

    return (
        <div className="book-item">
            <div > {title} </div>
            <div >
                { onEdit ?
                    (<Link to={`/authors/${author}`}>
                        {author}
                    </Link>) : author
                }
            </div>
            <div > {year} </div>
            <div > {pages} </div>


            {onEdit && <button onClick={onEdit}> Edit Book </button>}
            {onDelete && <button onClick={onDelete}>Delete</button>}

        </div>
    )
};

export default BookItem;