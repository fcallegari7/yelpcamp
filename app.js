var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: 'Summer Camp', image: 'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Winter Camp', image: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Camp Camp', image: 'https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Summer Camp', image: 'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Winter Camp', image: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Camp Camp', image: 'https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Summer Camp', image: 'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Winter Camp', image: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name: 'Camp Camp', image: 'https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
];

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("YelpCamp server has started!");
});
