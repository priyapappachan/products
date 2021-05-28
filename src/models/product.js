const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    landingPageUrl: {
        type: String
    }, 
    productId: {
        type: String
    },
    product: {
        type: String
    },
    productName: {
        type: String
    },
    landingPageUrl: {
        type: String
    },
    rating: {
        type: Number
    },
    ratingCount: {
        type: Number
    }, 
    discount: {
        type: Number
    }, 
    brand: {
        type: String
    },
    searchImage: {
        type: String
    }, 
    effectiveDiscountPercentageAfterTax: {
        type: Number
    },
    effectiveDiscountAmountAfterTax: {
        type: Number
    },
    inventoryInfo: [{
            skuId: {
                type: Number
            },
            label: {
                type: String
            },
            inventory: {
                type: Number
            },
            available: {
                type: String
            }
        },
    ],
    sizes: {
        type: String
    }, 
    images: [{   
            view: {
                type: String
            },
            src: {
                type: String
            }
        }
    ],
    gender: {
        type: String
    },
    primaryColour: {
        type: String
    },
    discountLabel: {
        type: String
    },
    discountDisplayLabel: {
        type: String
    },
    additionalInfo: {
        type: String
    },
    category: {
        type: String
    },
    mrp: {
        type: Number
    },
    price: {
        type: Number
    },
    colorVariantAvailable: {
        type: String
    },
    discountType: {
        type: String
    },
    catalogDate: {
        type: String
    },
    season: {
        type: String
    },
    year: {
        type: String
    },
    systemAttributes: [{    
            attribute: {
                type: String
            },
            value: {
                type: String
            }
        
    }]

}, { collection: 'products' });

module.exports = mongoose.model('Product', productSchema);