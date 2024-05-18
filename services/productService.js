
const Product = require("../models/productModel");
const awsBaseURl = process.env.AwsBaseUrl


const s3=require("../config/awsconfig")

class ProductService {

  // Service for creating a Product
  async createProduct(req, productDTO, file) {
    try {
 
      const product = new Product(productDTO);
  
      if (!file || !file.originalname) {
        throw new Error("File is missing or invalid");
      }
  
      // Extract filename from originalname
      const match = file.originalname.match(/^(.*?)\./);
      const filename = match ? match[1] : ''; // Extracts characters before the first dot
  
      // Upload image to S3
      const uploadParams = {
        Bucket: process.env.bucketname,
        Key: filename,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
  
      const uploadResponse = await s3.putObject(uploadParams).promise();
      console.log("uploadResponse", uploadResponse);
  
      const imageurl = `${awsBaseURl}${filename.replace(/\s+/g, '+')}`;
  
      // Set image field in the product
      product.image = imageurl;
  
      // Save product to database
      await product.save();
  
      return product;
    } catch (error) {
      // Handle validation errors
      if (error.errors) {
        throw new Error(`Validation Error: ${error.errors.join(', ')}`);
      }
      throw error; // Re-throw other errors
    }
  }
  

  async updateProduct(req, id, updateDTO, file) {
    try {
  
  
      const product = await Product.findById(id);
      if (!product) throw new Error("Product not found");
  
      if (file && file.originalname) {
        // Delete the existing S3 image if it exists
        if (product.image) {
          const deleteParams = {
            Bucket: process.env.bucketname,
            Key: product.image, // Use the current image key from the product
          };
    
          await s3.deleteObject(deleteParams).promise();
        }
    
        // Extract filename from originalname
        const match = file.originalname.match(/^(.*?)\./);
        const filename = match ? match[1] : ''; // Extracts characters before the first dot
    
        // Upload the new image to S3
        const uploadParams = {
          Bucket: process.env.bucketname,
          Key: filename,
          Body: file.buffer, // Assuming you're using multer's memory storage
          ContentType: file.mimetype,
        };
    
        const uploadResponse = await s3.putObject(uploadParams).promise();
    
        // Update the image field in the updateDTO
        const imageurl = `${awsBaseURl}}${filename.replace(/\s+/g, '+')}`;
        updateDTO.image = imageurl;
      }
  
      // Update the product in the database with the new data
      const updatedProduct = await Product.findByIdAndUpdate(id, updateDTO, { new: true, runValidators: true });
  
      return updatedProduct;
    } catch (error) {
      // Handle validation errors
      if (error.errors) {
        throw new Error(`Validation Error: ${error.errors.join(', ')}`);
      }
      throw error; // Re-throw other errors
    }
  }
  



  async deleteProduct(id) {
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw new Error("Product not found");

    if (product.image) {
      const deleteParams = {
        Bucket: process.env.bucketname,
        Key: product.image, // Use the current image key from the product
      };

      await s3.deleteObject(deleteParams).promise();
    }

    return product;
  }







  async getProductById(req,id) {
    const product = await Product.findById(id);
    if (!product) throw new Error("Product not found");
    

    return product;
  }

  async getAllProducts(req,page, size) {
    const skip = (page - 1) * size;
    const total = await Product.countDocuments();
    const products = await Product.find().skip(skip).limit(size);


    return {
      products,
      total,
      totalPages: Math.ceil(total / size),
    };
  }


}

module.exports = new ProductService();
