const path = require('path');
const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const { engine } = require("express-handlebars");


const app = express();
const PORT = process.env.PORT || 3001;


app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

// app.use(routes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });

app.get('/', (req, res) =>{
  res.render('home');
});

app.get('/signup', (req, res) =>{
  res.render('signup');
});

app.get('/events', (req, res) =>{
  res.render('events');
});

app.get('/genres', (req, res) =>{
  res.render('genres');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});