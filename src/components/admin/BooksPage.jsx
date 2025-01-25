import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook, deleteBook } from '../../Redux/ActionsCreators/actionsCreactors';
import '../../styles/BooksPage.css';
import Navbar from './NavAdmin';

const BooksPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [newBookDetails, setNewBookDetails] = useState({
    title: '',
    author: '',
    genre: '',
    image: null,
  });

  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.Books);
  const scrollRef = useRef(null);

  const handleEdit = (book) => {
    setCurrentBook(book);
    setNewBookDetails({
      title: book.title,
      author: book.author,
      genre: book.genre,
      image: book.image,
    });
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (currentBook) {
      const updatedBook = {
        id: currentBook.id,
        title: newBookDetails.title,
        author: newBookDetails.author,
        genre: newBookDetails.genre,
        image: newBookDetails.image,
      };
      dispatch(updateBook(currentBook.id, updatedBook));
      setIsEditing(false);
      setCurrentBook(null);
      setNewBookDetails({
        title: '',
        author: '',
        genre: '',
        image: null,
      });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id)); 
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <div className="books-page-container">
      <Navbar />
      <h1>Books Management</h1>

      {isEditing && (
        <div className="edit-form-overlay">
          <div className="edit-form">
            <h2>Edit Book</h2>
            <form onSubmit={handleSaveEdit}>
              <input
                type="text"
                name="title"
                value={newBookDetails.title}
                onChange={(e) => setNewBookDetails({ ...newBookDetails, title: e.target.value })}
                placeholder="Title"
                required
              />
              <input
                type="text"
                name="author"
                value={newBookDetails.author}
                onChange={(e) => setNewBookDetails({ ...newBookDetails, author: e.target.value })}
                placeholder="Author"
                required
              />
              <input
                type="text"
                name="genre"
                value={newBookDetails.genre}
                onChange={(e) => setNewBookDetails({ ...newBookDetails, genre: e.target.value })}
                placeholder="Genre"
                required
              />
              <input type="file" onChange={(e) => setNewBookDetails({ ...newBookDetails, image: e.target.files[0] })} />
              <div className="form-buttons">
               
                <button type="button" className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                <button type="submit" className="btn-save">Save Edit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="book-section">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="book-list-wrapper" ref={scrollRef}>
          <div className="book-list">
            {books.map((book) => (
              <div className="book-card" key={book.id}>
                <img className="book-image" src={book.image} alt={book.title} />
                <div className="book-details">
                  <h1 className="book-name">{book.title}</h1>
                  <h2 className="book-genre">{book.genre}</h2>
                  <h3 className="book-author">{book.author}</h3>
                </div>
                <div className="buttons">
                  <button className="btn-delete" onClick={() => handleDelete(book.id)}>Delete</button>
                  <button className="btn-edit" onClick={() => handleEdit(book)}>Edit</button>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default BooksPage;
