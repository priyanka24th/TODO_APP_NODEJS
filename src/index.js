const express = require('express');
const path = require('path')
const app = express();
const  hbs = require('hbs')
const port = 3000

staticPath = path.join(__dirname,'../public')
viewPath = path.join(__dirname,'../template/views')
partialsPath = path.join(__dirname,'../template/partials')
app.set('view engine','hbs')
app.use(express.static(staticPath))
app.set('views',viewPath)
hbs.registerPartials(partialsPath)


app.use(express.static('public'))
headerDict = {
    title: 'TODO LIST ',
    name: 'Priyanka Kumari'
}
app.get('/', (req, res) => {
    res.render('index',headerDict )
    });
app.get('/login', (req, res) => {
    res.render('login',headerDict )
    });
app.get('/signup', (req, res) => {
    res.render('signup', headerDict)
});

app.listen(port, () => console.log(`App listening to port ${port}`));