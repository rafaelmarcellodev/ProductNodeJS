const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.get('/products/:name', ProductController.getProductByName);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;