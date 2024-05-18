import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from "../Components/Navbar/Navbar";
// import Heroimg2 from '../Components/Heroimg2/Heroimg2';
import AddProduct from '../Components/AddProduct/AddProduct';

const AddProductPage = () => {
  return (
    <div>
      <Navbar/>
      {/* <Heroimg2 heading="ADD NEW PRODUCT" text="Lets"/> */}
    
      <AddProduct/>
      <Footer/>
    </div>
  )
}

export default AddProductPage;
