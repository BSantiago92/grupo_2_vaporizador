const express = require('express');
const app = express();

app.listen(3003, () => {console.log('servidor corriendo en el puerto 3003')})

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/home.html')
})