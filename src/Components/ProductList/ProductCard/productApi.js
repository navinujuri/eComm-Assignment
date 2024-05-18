
export function fetchAllProducts(amount = 1) {
    return new Promise(async (resolve) =>{
      //ToDo:We will not hard code the URL
      const response=await fetch('http://localhost:5000/api/products?page=1&size=10');
      const data=await response.json();
      resolve({data});     
    }
    );
  }

  export function deleteProductById(productId) {
    return new Promise(async (resolve) =>{
      //ToDo:We will not hard code the URL
      const response=await fetch(`http://localhost:5000/api/products/${productId}`,{
        method:'DELETE',
        headers:{'content-type':'application/json'}
      });
      resolve({data:{id:productId}});     
    }
    );
  }

  export function createProduct(formData){
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('quantity', formData.quantity);
    data.append('image', formData.image);
    return new Promise(async(resolve)=>{
      const response=await fetch('/http://localhost:5000/api/products/create',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{'content-type':'application/json'}
      });
      const data=await response.json();
      resolve({data});
    });
  }

  export function getProductById(productId) {
    return new Promise(async (resolve) =>{
      //ToDo:We will not hard code the URL
      const response=await fetch(`http://localhost:5000/api/products/${productId}`);
      const data=await response.json();
      resolve({data});     
    }
    );
  }

  export function updateById(productId,data) {
    return new Promise(async (resolve) =>{
      //ToDo:We will not hard code the URL
      console.log(productId,data)
      const response=await fetch(`http://localhost:5000/api/products/${productId}`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{'content-type':'application/json'}
      });
      resolve({data:{id:productId}});     
    }
    );
  }