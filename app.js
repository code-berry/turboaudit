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

app.post('/', (req,res) => {
	let name = req.body.name;
	let email = req.body.email;
	let topic = req.body.topic;
	let arr = []
	arr.push([name, email, topic]);
	console.log(arr);
	res.redirect('/');
});

app.get('/pages/:subpage' , (req,res) => {
	let subpage = req.params.subpage;
	let body = req.body.subBody;
	let title = 'TurboAudit | ' + subpage;
	let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium ab error commodi quaerat cupiditate neque nulla sint, non voluptate eius debitis placeat possimus dolorum quibusdam quos temporibus consequatur nesciunt!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eos voluptatibus temporibus tenetur eligendi et vero sit adipisci. Adipisci repudiandae earum enim est voluptas, consectetur animi dolor provident molestiae, dicta.";
	res.render('subpage.ejs',
		{
			subpage: subpage,
			title: title,
			text: text
		}
	);
});

app.listen(PORT, ()=> {
	console.log(`Application started on ${PORT}`);
});