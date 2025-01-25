
import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddFavoris } from "../../Redux/ActionsCreators/actionsCreactors";
import "../../styles/bookList.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 

const BookList = () => {
  const books = useSelector((state) => state.book.Books);
  const dispatch = useDispatch();
  const listRef = useRef(null);
  const [favorites, setFavorites] = useState([]); 

  
  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

 
  const toggleFavorite = (book) => {
    if (favorites.includes(book.id)) {
      setFavorites(favorites.filter((id) => id !== book.id));
    } else {
      setFavorites([...favorites, book.id]);
      dispatch(AddFavoris(book));
    }
  };

  return (
    <div className="book-section">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="book-list-wrapper" ref={listRef}>
        <div className="book-list">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-image-container">
                <img className="book-image" src={book.image} alt={book.title} />
                <div
                  className="favorite-icon"
                  onClick={() => toggleFavorite(book)}
                >
                  {favorites.includes(book.id) ? (
                    <AiFillHeart className="favorite-icon-filled" />
                  ) : (
                    <AiOutlineHeart className="favorite-icon-outline" />
                  )}
                </div>
              </div>
              <div className="book-details">
                <h1 className="book-name">{book.title}</h1>
                <h2 className="book-genre">{book.genre}</h2>
                <h3 className="book-author">{book.author}</h3>
              </div>
              <div className="book-actions">
              <button className="book-button favorite-button">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button  className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default BookList;
