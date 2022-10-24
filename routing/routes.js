const express = require('express');
const router = express.Router();
const data = require('../data/product.json');

router.use('/products', (req, res) => {
    res.render('products', { data: data });
});

router.use('/', (req, res) => {
    res.render('home', { data: '21512522' });
});
 
module.exports = router;