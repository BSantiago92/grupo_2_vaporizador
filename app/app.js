const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth');

const cors = require('cors');

app.use(cors());

//Configuración 
app.set('view engine', 'ejs');





app.listen(3003, () => { console.log('servidor corriendo en el puerto 3003') })

app.use(express.static('public'));
app.use(express.static('img'));

// formulario
app.use(session({ secret: 'usuario a logearse' }));
app.use(cookieParser());
app.use(auth);


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));





//Rutas
const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

const usersApiRoutes = require('./routes/api/user');
const productsApiRoutes = require('./routes/api/products');


app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/product/', productsRoutes)

app.use('/api/users', usersApiRoutes);

app.use('/api/products', productsApiRoutes);


app.use((req, res, next) =>{
    res.status(404).render("notFound");
});

/*
app.get('*', (req, res) => {
    res.status(404).send("Esta pagina no existe");
})*/