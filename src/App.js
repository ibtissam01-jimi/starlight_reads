
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about"; 
import HomePage from "./pages/pageAcceuil";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import AdminPage from "./pages/AdminPage";
import AdminProfile from "./components/admin/profileAdmin";
import Users from "./components/admin/users";
import {Provider} from "react-redux"
import store from "./Redux/store/store"
import FavorisList from "./components/favoris/favoris";
import BooksPage from "./components/admin/BooksPage";
import AddBookForm from "./components/admin/BookAdd";
function App() {
  return (
    <Provider store={store}>
    <Router basename="/starlight_reads">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<AdminPage />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/favoris" element={<FavorisList />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/edit_delete_books" element={<BooksPage />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
