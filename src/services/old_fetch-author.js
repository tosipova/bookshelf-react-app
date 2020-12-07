import { nanoid } from 'nanoid'


function fakeFetch(fn) {
  return new Promise((resolve, reject) => {
    try {
      const res = fn();
      resolve(res);
    } catch (error) {
      reject(error)
    }
  })
}
export function fetchAuthor(id) {
  return fakeFetch(() => {
    const authors = getAuthorsFromStorage();
    const author = authors.find(a => a.id === id); // [{id}, {id}, {id}] => {id}
    if (!author) {
      throw new Error(`There is no author with id ${id}`);
      // throw new Error(`There is no author with id ${id}`) DONE
    }
    return author;
  })
}

export function fetchAuthors() {
  return fakeFetch(() => {
    return getAuthorsFromStorage() // [] || null
  })
}

export function addAuthor(author) {
  console.log("addAuthor")
  return fakeFetch(() => {
    const authors = getAuthorsFromStorage();
    if (authors.some(a => a.name === author.name)) {
      throw new Error('Duplicate author')
    }

    authors.push({
      ...author,
      id: nanoid()
    })
    setAuthorsToStorage(authors)
  })

}


function setAuthorsToStorage(authors) {
  localStorage.setItem('authors', JSON.stringify(authors));
}
function getAuthorsFromStorage() {
  return JSON.parse(localStorage.getItem('authors')) || [];
}

export function removeAuthor(id) {
  return fakeFetch(() => {
    const authors = getAuthorsFromStorage();
    const authorIndex = authors.findIndex(a => a.id === id);
    if (authorIndex === -1) {
      throw new Error(`There is no authorIndex with id ${id}`);

    }
    authors.splice(authorIndex, 1)
    setAuthorsToStorage(authors);

  })
}


export function editAuthorFunk({ id, ...author }) {
  return fakeFetch(() => {
    const authors = getAuthorsFromStorage();
    const authorIndex = authors.findIndex(a => a.id === id);
    if (authorIndex === -1) {
      throw new Error(`There is no authorIndex with id ${id}`)
    }
    //  authors.splice(authorIndex, 1, {name,language,fields,id})
    //   const arr=[1,2,3,4]

    // const idx = 2
    // const arr1 = arr.slice(idx+1) // const arr1 = authors.slice(authorIndex+1)
    // const arr2= arr.slice(0,idx); // cosnt arr2 = authors.slice(0,auhotrIndex) 

    // const arr3 = arr2.concat(13,arr1)
    // console.log(arr3)
    // console.log([...arr2,13,...arr1])

    // authors.slice(0,authorIndex,)
    //  setAuthorsToStorage(authors)
    // ([...authors.slice(0,authorIndex),{name,language,fields,id},...authors.slice(authorIndex+1)])

    authors[authorIndex] = {
      ...author,
      id
    }
  })
}
