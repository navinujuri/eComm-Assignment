import "./AddProduct.css";
import React, { useState,useRef  } from 'react';
import { useDispatch } from "react-redux";
import { createProductAsync } from "../ProductList/ProductCard/productslice";
const AddProduct = () => {
  const dispatch=useDispatch();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    // console.log(formData)
    // dispatch(createProductAsync(formData))
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('quantity', formData.quantity);
    data.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/api/products/create', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add product.');
    }
    fileInputRef.current.value = null;
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      quantity: '',
      image: null
    })
  };

  return (
    <div className="form">
        <form >
            <h1>Add New Product</h1>

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

            <button className="btn" type="button" onClick={handleSubmit}>Submit</button>
       </form> 
    </div>
  )
}

export default AddProduct;
