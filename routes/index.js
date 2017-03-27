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

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'О Нас', current: 'about'});
});

router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Контакты', current: 'contacts'});
});


module.exports = router;
