import React from 'react';
import Home from './Home';
import NotFound from './components/NotFound'
import AllAuthors from './components/AllAuthors'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthorPage from './components/AuthorPage';
import { fetchBook } from './services/fetch-book';

function App() {

  const [booksList, setBooksList] = React.useState([]);
  React.useEffect(() => {
    fetchBook().then(
      bookResult => {
        setBooksList(bookResult)
      }
    );
  }, []);

  const onDeleteAuthor = () => {

  }

  return (
    <Router>
      <Switch>
        <Route exact path="/authors">
          <AllAuthors/>
        </Route>
        <Route path="/authors/:name">
          <AuthorPage onDeleteAuthor={onDeleteAuthor} />
        </Route>
        <Route exact path="/">
          <Home booksList={booksList} setBooksList={setBooksList} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;