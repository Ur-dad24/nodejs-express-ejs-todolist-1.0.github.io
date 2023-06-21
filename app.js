// jshint esversion: 6


const express = require('express');
const date = require(__dirname + "/date.js");
const app = express();

const newItems = [];
const workItems = [];

console.log(date);

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req , res) => {

   const currentDate = date.getDate();

res.render('list', {listTitle: currentDate, newItems: newItems}); //ejs key-value format

});
app.post('/', (req, res) => {

   let item = req.body.newItem;  //Getting hold of the inputted item and storing in a local variable to the post request scope

   if (req.body.list === "Work List" ){
        workItems.push(item);
        res.redirect('/work')
   } else{
      newItems.push(item)  //newItems is a global variable hence accessible from anywhere here
      res.redirect('/');
   }
   
});

app.get('/work', (req, res) =>{
   res.render('list', {listTitle: "Work List", newItems: workItems});
});
 
app.post('/work', (req, res) =>{
   let item = req.body.newItem;
   workItems.push(item);
   res.redirect('/work');
});

app.get('/about', (req, res) => {
   res.render('about');
})

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));