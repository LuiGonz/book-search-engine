import React, {Component} from "react";
import BookCard from "./BookCard";

class BookList extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    {
                        this.props.books.map((book, i) => {
                            return <BookCard 
                                        key={i}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        title={book.volumeInfo.title} 
                                        author={book.volumeInfo.authors}
                                        publishedDate={book.volumeInfo.publishedDate}
                                        previewLink={book.volumeInfo.previewLink}
                                    />
                        })
                    }
                </div>
                
            </div>
         );
    }
    
}

export default BookList;