import './ProductCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Link,useNavigate} from "react-router-dom";
import { deleteProductByIdAsync,getProductByIdAsync } from './productslice';
import { useDispatch } from "react-redux";

const defaultImg = `${process.env.PUBLIC_URL}/defaultProductImg.jpg`

 const ProductCard = ({ product,id }) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const deleteCard=()=>{
      dispatch(deleteProductByIdAsync(id));
  }

  if (!product) {
    throw new Error("Product data is missing");
  }
  function updateRoute(){
    dispatch(getProductByIdAsync(product._id));
    navigate(`/UpdateProduct/${product._id}`)
  }

   return (
     <div className= "work-container">
        <div className='project-container'>
            <div className='project-card'>
              <div>
                 <img src={product.image || defaultImg} alt="image"/>
              </div>
                <div>
                <h2 className='project-title'>{product.title || 'Title'}  </h2>
                <div className='project-details'>
                    <p>{product.description || 'Product Description'}</p>
                    <p>Price: ${product.price || 'Free'}</p>
                    <div className='pro-btns'>
                        <div onClick={updateRoute} className='btn'>Update</div>
                        <div  className='btn' onClick={deleteCard}>Delete</div>
                    </div>
                </div>
                </div>
               
            </div>
        </div> 
     </div>
   )
 }
 
 export default ProductCard;



 