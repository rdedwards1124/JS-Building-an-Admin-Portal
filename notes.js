

let response = fetch('http://localhost:3001/updateBook', {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'},
    body: JSON.stringify({
        "id": 3,
        "title": "The Annals of Arathrae",
        "year": 2016,
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "quantity": 8,
        "imageURL": "/assets/arathrae.jpeg"
    })
})

let updatedBook = await response.json()
console.log(updatedBook)
