// pageAcceuil.jsx
import React from "react";
import Header from "../components/home/header";
import SearchBar from "../components/home/search";
import AboutUs  from "../components/about/aboutus";

import BookList from "../components/home/books";
import Footer from "../components/home/footer";


const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="banner">
        <SearchBar />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <BookList/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
