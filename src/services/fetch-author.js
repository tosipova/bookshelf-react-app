const API_URL = 'https://bookshelf-api-42.herokuapp.com/api/v1/authors'

const AuthorService = {
  fetchAuthor(name) {
    // const url = API_URL + '/' + name
    const url = `${API_URL}/${name}`

    return fetch(url)
      .then(response => response.json())
  },

   removeAuthor(name) {
    const url = `${API_URL}/${name}`
    return fetch(url, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error();
        }
      })
  
  },

  fetchAuthors() {
   return fetch(API_URL)
    .then(response => {
      if (response.status !== 200) {
        throw new Error();
      }

      return response.json();
    })
    
  }
}

export default AuthorService
