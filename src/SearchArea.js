import React from "react";
import Header from "./Header";

const SearchArea = (props) => {
    return (
        <div class="container-fluid ">
            <Header />
            <form class="d-flex" onSubmit={props.searchBook} action="">
                <input class="form-control me-2" placeholder="book title..." onChange={props.handleSearch} type="text" />
                <input class="search" type="submit" value="Search"></input>
            </form>
        </div>
    );
}

export default SearchArea;