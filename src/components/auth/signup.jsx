

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Redux/ActionsCreators/actionsCreactors";
import "../../styles/auth.css";

const SignUp = () => {
  const [name, setName] = useState(""); // State for "Nom"
  const [lastName, setLastName] = useState(""); // State for "Prénom"
  const [email, setEmail] = useState(""); // State for "Email"
  const [password, setPassword] = useState(""); // State for "Mot de passe"
  const [confirmPassword, setConfirmPassword] = useState(""); // State for "Confirmer le mot de passe"
  const [error, setError] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Créer un nouvel utilisateur
    const newUser = {
      name,
      lastName,
      email,
      password,
    };

    // Envoyer l'utilisateur au Redux Store
    dispatch(addUser(newUser));

    // Afficher un message de succès
    setSuccessMessage("Compte créé avec succès !");

    // Rediriger vers la page d'accueil après 2 secondes
    setTimeout(() => {
      navigate("/"); // Rediriger vers la page d'accueil
    }); // 2 secondes de délai
  };

  return (
    <div className="bodySign">
      <div className="auth-wrapper">
        <div className="auth-image">
          <img className="auth-image-img" src="/images/sign.png" alt="sign-up" />
        </div>
        <div className="auth-container">
          <h2 className="auth-heading">Créer un compte</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="auth-input"
              type="text"
              placeholder="Nom"
              id="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="auth-input"
              type="text"
               id="input"
              placeholder="Prénom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="auth-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button className="auth-button" type="submit">
              Créer un compte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
