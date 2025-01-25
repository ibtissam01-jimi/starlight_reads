import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../home/header";
import { DeleteFavoris } from "../../Redux/ActionsCreators/actionsCreactors";
import "../../styles/favoris.css"

const FavorisList = () => {
    const favoris = useSelector((state) => state.book.favoris);

  const dispatch = useDispatch();

  return (
    <div className="favoris-list-container">
      <Header />
      <div className="favoris-list">
        {favoris.map((favori) => (
          <div key={favori.id} className="favori-card">
            <img className="favori-image" src={favori.image} alt={favori.title} />
            <div className="favori-details">
              <h1 className="favori-title">{favori.title}</h1>
              <h2 className="favori-genre">{favori.genre}</h2>
              <h3 className="favori-author">{favori.author}</h3>
              <button
                className="favori-button"
                onClick={() => dispatch(DeleteFavoris(favori.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavorisList;
