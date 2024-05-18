const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProductByID,
  getaProductByID,
  getAllProduct,
} = require("../controllers/productController");


const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();



/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get("/", getAllProduct);


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A product object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 */
router.get("/:id", getaProductByID);






/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete("/:id",  upload.single('image'),deleteProductByID);














/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: title
 *         type: string
 *         description: The title of the product.
 *       - in: formData
 *         name: description
 *         type: string
 *         description: The description of the product.
 *       - in: formData
 *         name: price
 *         type: number
 *         description: The price of the product.
 *       - in: formData
 *         name: category
 *         type: string
 *         description: The category of the product.
 *       - in: formData
 *         name: quantity
 *         type: number
 *         description: The quantity of the product.
 *       - in: formData
 *         name: image
 *         type: file
 *         description: The file to upload.
 *         x-mimetype: application/zip  # Moved x-mimetype attribute here
 *     responses:
 *       201:
 *         description: Product created successfully
 */



// Route to handle product creation with file upload



// Route to handle product creation with file upload
router.post('/create', upload.single('image'), createProduct);
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: title
 *         type: string
 *         description: The title of the product.
 *       - in: formData
 *         name: description
 *         type: string
 *         description: The description of the product.
 *       - in: formData
 *         name: price
 *         type: number
 *         description: The price of the product.
 *       - in: formData
 *         name: category
 *         type: string
 *         description: The category of the product.
 *       - in: formData
 *         name: quantity
 *         type: number
 *         description: The quantity of the product.
 *       - in: formData
 *         name: file
 *         type: file
 *         description: The file to upload.
 *     responses:
 *       201:
 *         description: Product created successfully
 */

router.put("/:id",upload.single('image'),updateProduct);



module.exports = router;
