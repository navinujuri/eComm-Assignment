import React from 'react'
import AddProductPage from './routes/AddProductPage';
import Projects from './routes/Projects';
import PageNotFound from './routes/PageNotFound';
import UpdateProductPage from './Components/AddProduct/updateProduct';
import { Routes, Route} from 'react-router-dom';



const MyRoutes = () => {
  return (
    <>
         <Routes>
          <Route index element={<Projects/>}/>
          <Route path="/AddProduct" element={<AddProductPage/>}/>
          <Route path="/UpdateProduct/:productId" element={<UpdateProductPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
         </Routes>
    </>
  )
}

export default MyRoutes