import React from 'react';

function BookItem({ title, author }) {
    
    return (
        <div>
            <div> {title} </div>
            <div> {author} </div>
        </div>
    )
};

export default BookItem;