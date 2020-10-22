const { User } = require('../../dataBase/models');


module.exports = {
    index: (req, res) => {
        // let groups = groupsModel.all()
        // res.render('groups/index',  { groups });

        User.findAll()
            //return res.json(response);
            .then(users => {
                if(users.length) {
                    let response = {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: users.length
                        },
                        data: users
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

