const express = require('express');
const ProductController = require('../controllers/productController');
const validateProduct = require('../middlewares/productValidator');

const router = express.Router();

router.post('/products', validateProduct, ProductController.createProduct);
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.get('/products/:name', ProductController.getProductByName);
router.put('/products/:id', validateProduct, ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;