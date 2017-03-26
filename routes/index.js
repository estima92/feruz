var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'ТСК БетонСтрой', current: 'index'});
});

router.get('/products', function(req, res, next) {
    res.render('products', { title: 'Продукты', current: 'products'});
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Услуги', current: 'services'});
});


module.exports = router;
