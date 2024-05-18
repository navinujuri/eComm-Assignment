import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from './ProductCard/ProductCard';
import './ProductCard/ProductCard.css';
import ErrorBoundary from '../ErrorBoundary';

import { selectAllProducts, status } from './ProductCard/productslice';


const ProductList= () => {
  
  const products = useSelector(selectAllProducts);
  const isLoading=useSelector(status)
  
  // const { data, error, isLoading } = useProducts();
  if (isLoading==='loading') return <div>Loading...</div>;
  //if (error) return <div>An error occurred: {error.message}</div>;

  
  return (
    <div className= "work-container">
       <h1 className='projectr-heading'> Products </h1>
       <div className='project-container'>
       <ErrorBoundary>
        {products?.map((product, ind)=>{

            return(
                <ProductCard
                key={product._id} product={product} id={product._id}
                />
            );
        })}
          </ErrorBoundary>

       </div> 
    </div>
  )
}

export default ProductList;



//     return (
//         <div className="products-list">
//             {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//     );
// };

