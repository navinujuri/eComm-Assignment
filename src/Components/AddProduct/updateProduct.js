import "./AddProduct.css";
import React, { useState,useRef, useEffect  } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { updatedProductDetails,updateProductByIdAsync,productReset } from "../ProductList/ProductCard/productslice";
const UpdateProduct = () => {
    ///to be resolved image field in update form
    const navigate=useNavigate();
    const {productId}=useParams();
  
  const currProduct = useSelector(updatedProductDetails);
  const [formData, setFormData] = useState({
    title: currProduct?.title||'',
    description:currProduct?.description|| '',
    price: currProduct?.price||'',
    category:currProduct?.category|| '',
    quantity:currProduct?.quantity|| '',
    image: null
  });
  useEffect(()=>{
     setFormData({
        title: currProduct?.title||'',
        description:currProduct?.description|| '',
        price: currProduct?.price||'',
        category:currProduct?.category|| '',
        quantity:currProduct?.quantity|| '',
        image: null
      })
  },[currProduct])

 

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    //dispatch(updateProductByIdAsync(productId,formData))
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('quantity', formData.quantity);
    data.append('image', formData.image);
    
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'PUT',
        body: data
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const res = await response.json();
       
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add product.');
    }
   
    navigate('/');
  };

  return (
    <div className="form">
        <form >
            <h1>Update Product</h1>

            <label>Product Name</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required/>

            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required/>

            <label>Price</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required/>

            <label>Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required/>

            <label>Quantity</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required/>

            <label>Product Image</label>
            <input type="file" name="image" ref={fileInputRef}  onChange={handleChange} required/>

            <button className="btn" type="button" onClick={handleSubmit}>Update</button>
       </form> 
    </div>
  )
}

export default UpdateProduct;
