
// method to get filters
const getFilters = async (products) => {
    
    products.forEach(product => {
        console.log(product);
        if (filters['gender'] && filters['gender'].values) {
            if (!filters['gender'].values.includes(product.gender))
                filters['gender'].values.push(product.gender);
        } else {
            filters['gender'] = {
                'values': [product.gender]
            }
        }
        if (filters['brand'] && filters['brand'].values) {
            if (!filters['brand'].values.includes(product.brand))
                filters['brand'].values.push(product.brand);
        } else {
            filters['brand'] = {
                'values': [product.brand]
            }
        }
        if (filters['category'] && filters['category'].values) {
            if (!filters['category'].values.includes(product.category))
                filters['category'].values.push(product.category);
        } else {
            filters['category'] = {
                'values': [product.category]
            }
        }
    });
    return filters;
}

    
// Exported functions
module.exports = {
    getFilters: getFilters
};