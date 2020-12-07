import React from 'react';
// import '../styles/oneAuthor.css'

function OneAuthor({ name, onDelete, onEdit }) {
    return (
        <div className="one-author">
            <div className="field"> {name} </div>
            <div className="btn-group">
                <button className="edit-button" onClick={onEdit}> Edit Author</button>
                <button onClick={onDelete} > Delete Author </button>
            </div>

        </div>
    );
}

export default OneAuthor