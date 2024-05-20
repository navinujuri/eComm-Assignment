import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from './ProductCard/ProductCard';
import './ProductCard/ProductCard.css';
import ErrorBoundary from '../ErrorBoundary';
import Pagination from './Pagination/pagination';
import { selectAllProducts, status ,totalProductPages,fetchAllProductsAsync} from './ProductCard/productslice';


const ProductList= () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const totalPages=useSelector(totalProductPages);
  const isLoading=useSelector(status);
  const [pageChange,onPageChange]=useState(1);
  useEffect(()=>{
    dispatch(fetchAllProductsAsync(pageChange))
  },[pageChange])

  useEffect(()=>{
    if(products && products.length===0 && totalPages>1){
      dispatch(fetchAllProductsAsync(totalPages-1))
    }
  },[products])
  
  
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
                key={product._id} product={product} id={product._id} currentPage={pageChange}
                />
            );
        })}
          </ErrorBoundary>
       </div> 
       <div class="paginationContainer">
        <Pagination currentPage={pageChange} totalPages={totalPages} onPageChange={onPageChange}></Pagination>
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

