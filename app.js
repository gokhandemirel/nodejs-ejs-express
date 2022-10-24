const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const router = require('./routing/routes');
const port = 3000;

// view engine template
app.use(expressLayouts);
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');

// static pages
app.use(express.static('public'));
app.use(express.static('node_modules'));

// routing
app.use(router);

// listen port
app.listen(port);