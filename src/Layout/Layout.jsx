import React from 'react'
import HomePage from '../pages/Homepage/HomePage';
import Header from "../Components/Header/Header";
import Questions from "../pages/Question/Questions";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Questions />
      <Footer />
    </>
  );
}

export default Layout