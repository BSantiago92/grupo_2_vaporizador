const { Category } = require('../../dataBase/models');


module.exports = {
    index: (req, res) => {
        // let groups = groupsModel.all()
        // res.render('groups/index',  { groups });

        Category.findAll()
            //return res.json(response);
            .then(categories => {
                if(categories.length) {
                    console.log(categories);
                    let response = {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: categories.length
                        },
                        data: { 
                            categories
                        }
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

    },
    detail: (req,res) => {
        Category.findByPk( req.params.id)
        .then(category => {
            return res.json(category);
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json( { error: 'Could not connect to database' } );
        })
    }
}
