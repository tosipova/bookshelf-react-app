import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import OneAuthor from './OneAuthor';
import AuthorService from '../services/fetch-author';
import BookItem from './BookItem';




function AuthorPage() {
    const [books, setBooks] = React.useState([])
    const [authors, setAuthors] = React.useState([])
    const { name } = useParams();
    // https://reactrouter.com/web/api/Hooks/usehistory
    const history = useHistory();
   

    React.useEffect(() => {
        AuthorService.fetchAuthor(name)
            .then((response) => {
                if (response === []) {
                    history.push('/404.html')
                }
                // Todo: если data === [], то сделай редирект на 404 страницу,done
                setBooks(response)
              
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    const removeAuthor = (name) => {
        AuthorService.removeAuthor(name)
            .then(() => {
                setAuthors(authors.filter(item => item.name !== name))
            })
    }

    // Todo: remove author then redirect to home page, done
    const navigateToHome = () => history.push('/')

    return (
        <>
            <OneAuthor
                name={name}
                onDelete={() => {
                    removeAuthor(name)
                    navigateToHome()
                }}
            // onEdit={onEdit} 
            />
            {books.map(book => {
                return <BookItem {...book} key={book._id} />
            })}
        </>
    )
}

export default AuthorPage