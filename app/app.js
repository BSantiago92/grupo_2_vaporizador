const express = require('express');
const app = express();

//Configuración 
app.set('view engine', 'ejs');




app.listen(3003, () => { console.log('servidor corriendo en el puerto 3003') })

app.use(express.static('public'));
app.use(express.static('img'));



 //Rutas
 const indexRoutes = require('./routes/index');
 const productsRoutes = require('./routes/products');
 const userRoutes = require('./routes/user');

 app.use('/', indexRoutes)
 app.use('/user', userRoutes)
 app.use('/product/', productsRoutes)



app.get('*', (req, res) => {
    res.status(404).send("Esta pagina no existe");
})