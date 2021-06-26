import React from 'react';
import Blog from './Blog';
import Footer from './Footer';
import Membership from './Membership';
import Ready from './NewRecipe';
import Recipes from './Recipes';
import Services from './Services';

const Home: React.FC = () => {
  return (
    <>
      <Ready />
      <Recipes />
      <Services />
      <Blog />
      <Membership />
      <Footer />
    </>
  );
};

export default Home;
