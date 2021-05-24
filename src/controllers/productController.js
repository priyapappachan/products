const axios = require("axios");
const productService = require('../services/productService');

//API to get products
exports.getProducts = async (req, res, next) => {

    try {
        filterKey = req.query.filterKey;
        filterValue = req.query.filterValue;
        console.log('filter key : ' + filterKey);
        search = req.query.search;

        //call external API
        endpoint = 'https://demo7242716.mockable.io/products';
        response = await axios.get(endpoint);
        products = response.data.products;

        //if no params present return all products
        if (!filterKey && !search) {
            res.json({
                'result': products,
                'status': 'success'
            });
        }

        result = [];
        products.forEach(product => {
            
            //check for filters
            for (let key in product) {
                if (filterKey && key === filterKey && product[key] === filterValue) {
                    result.push(product);
                }
            }

            //check for search
            productName = []
            searchName = []
            if (search) {
                productName = product.productName.toLowerCase().split(" ");
                searchName = search.toLowerCase().split(" ");
                const found = productName.some(r=> searchName.includes(r))
                if (found)
                    result.push(product);
            }
        });

        res.json({
            'result': result,
            'status': 'success'
        });
    } catch (error) {
        console.log(error);
        res.json({ 'status': 'error' });
    }
};

//API to get filters and their values
exports.getFilters = async (req, res, next) => {

    try {
        filterKey = req.query.filterKey;
        filterValue = req.query.filterValue;
        search = req.query.search;

        //call external API
        endpoint = 'https://demo7242716.mockable.io/products';
        response = await axios.get(endpoint);
        products = response.data.products;
        filters = {};

        //call method to get list of filters and their values
        productService.getFilters(products);
        res.json({
            'result': filters,
            'status': 'success'
        });
    } catch (error) {
        console.log(error);
        res.json({ 'status': 'error' });
    }
};