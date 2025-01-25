import React from "react";
import "../../styles/search.css";


const SearchBar=()=>{
    return(
        <div>
            <div className="searchbar"> 
                <div className="search">
                    <input type="text" placeholder="Chercher un livre" />
                    <button type="button">Search</button>
                </div>
                <h1>Welcome to our librery !</h1>
                <p>Let Discover Our Books World ,enjoying reading the best books and novels,and travel to an auther world </p>
            </div>
        </div>
    )
}

export default SearchBar