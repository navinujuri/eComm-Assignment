import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchAllProductsAsync } from '../Components/ProductList/ProductCard/productslice';
import Footer from '../Components/Footer/Footer';
import Navbar from "../Components/Navbar/Navbar";
import ProductList from '../Components/ProductList/ProductList';

const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchAllProductsAsync());
  }, []);
  return (
    <div>
      <Navbar/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Projects;
