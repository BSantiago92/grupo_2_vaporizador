const { Product } = require('../../dataBase/models');


module.exports = {
    index: (req, res) => {
        // let groups = groupsModel.all()
        // res.render('groups/index',  { groups });

        Product.findAll({ include: 'Category' })
            //return res.json(response);
            .then(products => {
                if(products.length) {
                    let response = {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: products.length
                        },
                        data: products
                    }

                    return res.json(response);
                } else {
                    return res.status(404).json( {error: 'No results found'} );
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json( { error: 'Could not connect to database' } );;
            })

    }
}

