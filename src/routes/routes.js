const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/api/products/:brand?/:gender?/:category?:search?', productController.getProducts);

router.get('/api/filters', productController.getFilters);

module.exports = router;