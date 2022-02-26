import React, {Component} from "react";
import SearchArea from "./SearchArea";
import request from "superagent";
import BookList from "./BookList";

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: "",
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({q: this.state.searchField})
            .then((data) => {
                console.log(data);
                this.setState({books: [...data.body.items]});
            })
    }

    handleSearch = (e) => { 
        this.setState({searchField: e.target.value})
    }   
    
    render() {
        return (
            <div className="navbar-books-container">
                <nav class="navbar navbar-dark">
                    <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                </nav>
                <section class=" py-4 my-5">
                    <BookList books={this.state.books} />
                </section>
            </div>
        );
    }
}

export default Books;
