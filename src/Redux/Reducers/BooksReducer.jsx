
import {
    ADD_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    ADD_FAVORIS,
    DELETE_FAVORIS,
  } from '../ActionsTypes/actionsTypes'; 
  
  const initialState = {
        Books :[
            {   id:1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                image: "images/book1.jpeg"
              },
              {  id:2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                image: "images/book2.jpeg"
              },
              
              {  id:3,
                title: "The Alchemist",
                author: "Paulo Coelho",
                genre: "Adventure",
                image: "images/book3.jpeg"
              },
              {  id:4,
                title: "The Chronicles of Narnia",
                author: "C.S. Lewis",
                genre: "Fantasy",
                image: "images/book4.jpeg"
              },
              {  id:5,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                genre: "Fiction",
                image: "images/book5.jpeg"
              },
             
              
              {  id:6,
                title: "The Outsiders",
                author: "S.E. Hinton",
                genre: "Young Adult",
                image: "images/book6.jpeg"
              },
              {  id:5,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                genre: "Fiction",
                image: "images/book7.jpeg"
              },
             
              
              {  id:6,
                title: "The Outsiders",
                author: "S.E. Hinton",
                genre: "Young Adult",
                image: "images/book1.jpeg"
              },
              
        ],

        favoris:[{   id:1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          genre: "Classic",
          image: "images/book1.jpeg"
        },
        {  id:2,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genre: "Fiction",
          image: "images/book2.jpeg"
        },
        
        {  id:3,
          title: "The Alchemist",
          author: "Paulo Coelho",
          genre: "Adventure",
          image: "images/book3.jpeg"
        },
          
         ],
    }
  
  const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BOOK:
      return {
        ...state,
        Books: [...state.Books, action.payload],
      };
      case UPDATE_BOOK:
      return {
        ...state,
        Books: state.Books.map((book) =>
          book.id === action.payload.id ? action.payload.updatedBook : book
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        Books: state.Books.filter((_, index) => index !== action.payload),
      };

    case ADD_FAVORIS:
        return {
             ...state,
              favoris: [...state.favoris, action.payload],
            };

     case DELETE_FAVORIS:
                return{
                    ...state,
                    favoris:state.favoris.filter((favori)=>favori.id !== action.payload)
                };

      
      default:
        return state;
    }

    
  };
  
  export default BooksReducer;