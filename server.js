const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { engine } = require("express-handlebars");

const session = require('express-session');

<<<<<<< HEAD
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
=======
const SequelizeStore = require('connect-session-sequelize')(session.Store);
>>>>>>> 40d0d74815cdc2887a0382e8b0442f58bcb5bb65

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
=======
app.use(session(sess));
>>>>>>> 40d0d74815cdc2887a0382e8b0442f58bcb5bb65

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use(routes);

app.get('/signup', (req, res) =>{
  res.render('signup');
});

app.get('/events', (req, res) =>{
  res.render('events');
});

app.get('/genres', (req, res) =>{
  res.render('genres');
});

// app.get('/post', (req, res) =>{
//   res.render('post');
// });

app.get('*', (req, res) =>{
  res.render('home');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});