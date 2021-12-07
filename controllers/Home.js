var fs = require('fs');
const { User, Product, Order, ProductCategory } = require('../models')

const f = {
    test: () => {
        console.log('Test controller is acitive')
    },
    get_category: async() => {
        var result = await ProductCategory.findAll()
        return result
    },
    get_new_products: async() => {
        // var result = []
        // await Product.findAll()
        //     .then(async(products) => {
        //         products.forEach( async(product) => {
        //             // const category = await ProductCategory.findOne({where: {id: product.category_id}})
        //             result.push({
        //                 id: product.id,
        //                 title: product.title,
        //                 category_id: product.category_id,
        //                 description: product.description
        //             })
        //         });
        //     })

        var result = await Product.findAll({ 
            include: ProductCategory ,
            order: [
                ['createdAt', 'DESC']
            ]
        })
        return result.slice(0,4)
    },
    // get_product_category: function async(id) {
    //     var result = {}
    //     await ProductCategory.findOne({ where: { id: id } })
    //         .then( category => {
    //             result = category
    //         })
    //     return result
    // }
}

const home = {
    all: async() => {
        //do nothing
    },
    index: async(req, res) => {
        var data = {
            title: 'Home',
            categories: await f.get_category(),
            newProductList: await f.get_new_products()
        }
        try {
            res.render('home_view', data)
            // res.send(data.productList)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = home