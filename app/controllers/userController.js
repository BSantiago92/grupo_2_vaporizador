const path = require('path');

module.exports = {
     login: (req, res) => {
        res.render('login')
    },
    
     register: (req, res) => {
        res.sendFile(path.join(__dirname,  '/../views/register.html'))
    }
}