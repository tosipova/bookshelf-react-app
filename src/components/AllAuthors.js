import React from 'react';
import { Link } from 'react-router-dom';
import AuthorService from '../services/fetch-author';

function AllAuthors() {

    const [authors, setAuthors] = React.useState([])

    React.useEffect(() => {
        AuthorService.fetchAuthors()
            .then((response) => {
                setAuthors(response)
            })
    }, [])

    return (
        <div>
            {
                // ['', '', '']
                authors.map(author => {
                    return (
                        <div>
                             <Link to={`/authors/${author}`}>
                        {author}
                    </Link> 
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllAuthors