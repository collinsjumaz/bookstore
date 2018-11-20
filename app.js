const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
	res.render('index', 
	{ 
		title:'Library',
		nav: [{ link: '/books, title: 'books' },
		 {link: '/authors, title: 'authors'}]
	}
		);
	})
app.listen(3000, function(){
	debug('listening on port 3000');

	});