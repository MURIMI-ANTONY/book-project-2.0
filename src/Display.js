import React from "react"

// Dispaly component to display all books searched by the user.
function Display({books}){
    return(
        <div className="grid-item" style={{backgroundColor:"#A9A9A9"}}>
            {books.map((book) => (
                <ul key={book.id}>
                <li  style={{textTransform : "uppercase"}}><b>{book.volumeInfo.title}</b></li>
                <li ><strong>Author: </strong>{book.volumeInfo.authors}</li>
                <li >{book.volumeInfo.Categories}</li>
                <li><u>{book.volumeInfo.publisher} : {book.volumeInfo.publishedDate}</u></li>
                <li>{book.volumeInfo.description}</li>
                <br></br>
                </ul>
                
            ))}
        </div>
    
    )
}

export default Display