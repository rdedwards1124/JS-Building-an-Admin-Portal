
// Your Code Here

// write a fetch request that changes the title of a book with an ID of 3 to The Legends of Arathrae.
let response = await fetch('http://localhost:3001/updateBook', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 3,
        title: "Legends of Arathrae",
    }),
})
let updateBook = await response.json();
console.log(updateBook)

// Retrieve a list of books from the server.
let response2 = await fetch('http://localhost:3001/listBooks', {
    method: 'GET',
    headers: null,
    body: null,
})
let books = await response.json();
console.log(books)



