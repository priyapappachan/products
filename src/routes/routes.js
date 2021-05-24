const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/api/products/:filterKey?/:filterValue?/:search?', productController.getProducts);

router.get('/api/filters', productController.getFilters);

module.exports = router;