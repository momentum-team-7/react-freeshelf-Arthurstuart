import { useState } from "react"
import React, [ useState] from 'react'
import books from '.books'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function App() {
    const [bookquery, setquery] = useState{books}
}

const manageData = (title, minimized) = {
    const additionalInfo = bookquery.map(book)
        if (book.title === title) {
            return{book, minimized}
        }
}
const Books = (props) => {
    const { title, author, minimized, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription }
    const [book, idx] = useState
    return (
        <div className='list_of_books'>
            <h1>List of Books to Read</h1>
                {books.map((book)) =>
                    <book
                        title = {book.title}
                        author = {book.author}
                        shortDescription = {book.shortDescription}
                        coverImageUrl = {book.coverImageUrl}
                        url = {book.url}
                        key={idx}/>
                        <button onClick = {() => 
                          className='more-info'  

                        }

                    >
                }


</div>

    )
}

{