import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../Redux/ActionsCreators/actionsCreactors';
import '../../styles/BookAdd.css';

const AddBookForm = () => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    genre: '',
    image: null,
    imagePreview: null, 
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newBook = {
      ...bookDetails,
      id: Date.now(),
    };

   
    if (bookDetails.image) {
      newBook.image = URL.createObjectURL(bookDetails.image); 
    }

    dispatch(addBook(newBook)); 
    navigate('/edit_delete_books'); 
  };

  const handleCancel = () => {
    navigate('/admin'); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) { 
      const imagePreview = URL.createObjectURL(file); 
      setBookDetails({
        ...bookDetails,
        image: file,
        imagePreview: imagePreview, 
      });
    } else {
      alert('Veuillez sélectionner un fichier image valide.');
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={bookDetails.title}
          onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })}
          required
          placeholder="Enter book title"
        />

        <label htmlFor="author">Author :</label>
        <input
          type="text"
          id="author"
          name="author"
          value={bookDetails.author}
          onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
          required
          placeholder="Enter the book's author"
        />

        <label htmlFor="genre">Genre :</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={bookDetails.genre}
          onChange={(e) => setBookDetails({ ...bookDetails, genre: e.target.value })}
          required
          placeholder="Enter book genre"
        />

        <label htmlFor="image">Picture :</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
        />
        
       
        {bookDetails.imagePreview && (
          <div className="image-preview">
            <img src={bookDetails.imagePreview} alt="Prévisualisation" />
          </div>
        )}

        <div className="form-buttons">
          <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn-submit">Add</button>
          
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
