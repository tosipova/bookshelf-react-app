import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BookItem.css'



function BookItem(props) {
    const { title, author, year, pages, onDelete, onEdit } = props;
    return (
        <div className="book-item">
            <div> {title} </div>
            <div>
                {author.map((item) => {
                    if (onEdit) {
                        return (
                            <Link to={`/authors/${item}`}>
                                <div>{item}</div>
                            </Link>
                        )
                    }

                    return <div>{item}</div>
                })}
            </div>
            <div> {year} </div>
            <div> {pages} </div>

            {onEdit && <button onClick={onEdit}> Edit Book </button>}
            {onDelete && <button onClick={onDelete}>Delete</button>}

        </div>

    )
};

export default BookItem;