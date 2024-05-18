const asyncHandler = require("express-async-handler");
const ProductService = require("../services/productService");
const { CreateProductDTO, UpdateProductDTO } = require("../dtos/productDTO");
const validateMongoDbId = require("../utils/validateMongodbId");
const z = require("zod");

const productDTOSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().min(0),
  category: z.string(),
  quantity: z.number().min(0),
});





const createProduct = asyncHandler(async (req, res) => {

  const productDTO = new CreateProductDTO(req.body);

  if (req.file) {
    productDTO.image = req.file.filename;
  }

  const newProduct = await ProductService.createProduct(req, productDTO, req.file);
  res.status(201).json({ status: "success", data: newProduct });

});

const updateProduct = asyncHandler(async (req, res) => {

  const id = req.params.id;
  validateMongoDbId(id);


  const updateDTO = new UpdateProductDTO(req.body);

  const updatedProduct = await ProductService.updateProduct(req,id, updateDTO, req.file);
  res.status(200).json({ message: "Product updated successfully", updatedProduct });
  
});

const deleteProductByID = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);

  const deletedProduct = await ProductService.deleteProduct(id);
  res.status(200).json({ message: "Product deleted successfully", deletedProduct });
});

const getaProductByID = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);

  const product = await ProductService.getProductById(req,id);
  res.status(200).json(product);
});

const getAllProduct = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const size = parseInt(req.query.size, 10) || 10;

  const { products, total, totalPages } = await ProductService.getAllProducts(req,page, size);
  res.status(200).json({ page, size, total, totalPages, products });
});

module.exports = {
  createProduct,
  updateProduct,
  deleteProductByID,
  getaProductByID,
  getAllProduct,
};
