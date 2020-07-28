const express = require('express');
const app = express();

app.listen(3003, () => { console.log('servidor corriendo en el puerto 3003') })

app.use(express.static('public'));
app.use(express.static('img'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/carrito', function(req, res) {
    res.sendFile(__dirname + '/public/productCart.html')
})

app.get('/catalogo', function(req, res) {
    res.sendFile(__dirname + '/public/catalogo.html')
})

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/register', function(req, res) {
    res.sendFile(__dirname + '/public/register.html')
})

app.get('/productdetail', function(req, res) {
    res.sendFile(__dirname + '/public/productDetail.html')
})

app.get('*', (req, res) => {
    res.status(404).send("Esta pagina no existe");
})