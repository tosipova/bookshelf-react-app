import React from 'react';
import EditCard from './EditCard'
import BookItem from './BookItem'


function App() {
  return (
    <div>
      <EditCard />
      <BookItem author="Smith" title="find nemo"/>
    </div>
  );
}

export default App;
