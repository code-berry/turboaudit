const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
})

app.get('/about', (req,res) => {
	res.render('about.ejs');
});

app.listen(PORT, ()=> {
	console.log(`Application started on ${PORT}`);
});