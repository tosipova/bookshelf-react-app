import React, { useState } from 'react';
import { addBook } from '../services/fetch-book';

import '../css/EditCard.css';


// class EditCard extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             title: 'find nemo',
//             author: 'smith'
//             //...
//         }
//     }

//     setTitle = newTitle => {
//         this.setState({
//             title: newTitle
//         })
//     }

//     render() {
//         const { title } = this.state;

//         return <form>...</form>
//     }
// }

function EditCard() {
    const [title, setTitle] = useState("find nemo")
    const [author, setAuthor] = useState("smith")
    const [year, setYear] = useState("1997")
    const [pages, setPages] = useState("5")

    const onSubmit = (event) => {
        event.preventDefault()

        addBook(title, author, year, pages);
    }
    return (
        <form onSubmit={onSubmit} className="edit-form">

            <input
                type="text"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

            <input
                type="text"
                value={author}
                onChange={(event) => {
                    setAuthor(event.target.value)
                }}
            />

            <input
                type="text"
                value={year}
                onChange={(event) => {
                    setYear(event.target.value)
                }}
            />

            <input
                type="text"
                value={pages}
                onChange={(event) => {
                    setPages(event.target.value)
                }}
            />

            <button className="button-save"> Save </button>

        </form>
    )
};
export default EditCard;