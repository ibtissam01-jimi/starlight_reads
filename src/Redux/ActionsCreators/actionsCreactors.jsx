
import {ADD_BOOK,UPDATE_BOOK,DELETE_BOOK,CHERCHER_BOOK,ADD_USER,UPDATE_USER,DELETE_USER,CHERCHER_USER,ADD_COMMANDE,UPDATE_COMMANDE,DELETE_COMMANDE,FILTRER,CHERCHER_PAR_TITRE, ADD_FAVORIS, DELETE_FAVORIS,} from '../ActionsTypes/actionsTypes'; 
  
  
  export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book,
  });
  
  export const updateBook = (id, updatedBook) => ({
    type: UPDATE_BOOK,
    payload: { id, updatedBook },
  });
  
  export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id,
  });
  
  export const chercherBook = (query) => ({
    type: CHERCHER_BOOK,
    payload: query,
  });
  
  
  export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
  });
  
  export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
  });
  
  export const updateUser = (id, updatedUser) => ({
    type: UPDATE_USER,
    payload: { id, ...updatedUser },
  });
  
  
  export const chercherUser = (query) => ({
    type: CHERCHER_USER,
    payload: query,
  });
  
  
  export const addCommande = (commande) => ({
    type: ADD_COMMANDE,
    payload: commande,
  });
  
  export const updateCommande = (id, updatedCommande) => ({
    type: UPDATE_COMMANDE,
    payload: { id, updatedCommande },
  });
  
  export const deleteCommande = (id) => ({
    type: DELETE_COMMANDE,
    payload: id,
  });
  
  
  export const filtrer = (criteria) => ({
    type: FILTRER,
    payload: criteria,
  });
  
  export const chercherParTitre = (title) => ({
    type: CHERCHER_PAR_TITRE,
    payload: title,
  });
  

  export const AddFavoris=(book)=>(
    {
      type:ADD_FAVORIS,
      payload:book,

    }
  );

  export const DeleteFavoris=(id)=>(
    {
      type:DELETE_FAVORIS,
      payload:id,
    }
  )