const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8080;
// middleware
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
// expres HBS
app.set('view engine', 'hbs');

hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
})
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Hector',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {});
});


app.listen(port, () => {
    console.log('escuchando el puerto 8080');
});