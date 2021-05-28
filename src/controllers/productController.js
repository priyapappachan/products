const axios = require("axios");
const productService = require('../services/productService');

//API to get products
exports.getProducts = async (req, res, next) => {

    try {

        brand = req.query.brand;
        category = req.query.category;
        gender = req.query.gender;
        search = req.query.search;

        //if no params present return all products
        if (!brand && !category && !gender && !search) {
            products = await productService.getProducts();
        }
        
        if (search) {
            products = await productService.searchProducts(search);
        }

        if (brand || category || gender) {
            products = await productService.filterProducts(brand, gender, category);
        }

        res.json({
            'result': products,
            'status': 'success'
        });

    } catch (error) {
        console.log(error);
        res.json({ 'status': 'something went wrong' });
    }
};

//API to get filters and their values
exports.getFilters = async (req, res, next) => {

    try {
        
        const filters = await productService.getFilters();
        res.json({
            'result': {
                'brand' : filters[0].brand,
                'category' : filters[0].category,
                'gender' : filters[0].gender,
            },
            'status': 'success'
        });
        
    } catch (error) {
        console.log(error);
        res.json({ 'status': 'error' });
    }
};