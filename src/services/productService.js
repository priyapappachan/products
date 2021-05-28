const product = require("../models/product");

// method to get filters and values
const getFilters = async () => {
    const filters = await product.aggregate(
        [
            {
                $group:
                {
                    _id: '$id',
                    brand: { $addToSet: "$brand" },
                    gender: { $addToSet: "$gender" },
                    category: { $addToSet: "$category" }
                }
            }
        ]
    )
    return filters;
}

// method to get all products
const getProducts = async () => {

    const products = await product.find();
    return products;

}

// method to get products by product name search
const searchProducts = async (search) => {

    const products = await product.find(
        { '$text': { $search: search } }

    );
    return products;

}

// method to get products by search filter
const filterProducts = async (brand, gender, category) => {

    var queryCond = {}
    if (brand) {
        queryCond.brand = brand;
    }
    if (gender) {
        queryCond.gender = gender;
    }
    if (category) {
        queryCond.category = category;
    }
    const products = await product.find(queryCond);
    return products

}


// Exported functions
module.exports = {
    getFilters: getFilters,
    getProducts: getProducts,
    searchProducts: searchProducts,
    filterProducts: filterProducts
};