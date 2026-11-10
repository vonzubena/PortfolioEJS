let express = require('express');
let router = express.Router();

/* Each route matches a web address and renders one EJS view. function(req, res, next) 
is a callback function. Express runs it when someone visits that address. 
req = the request, res = the response. res.render(view, locals) builds 
the page from views/<view>.ejs and passes in the page title, which header.ejs 
shows in the tab and uses to highlight the menu. */

// GET home page 
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

// GET About Me Page
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Me'});
});

// GET Projects Page
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'});
});

// GET Contact Page
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact Me'});
});

module.exports = router;