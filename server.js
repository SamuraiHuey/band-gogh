const path = require('path');
const express = require('express');
<<<<<<< HEAD
const sequelize = require('./config/connection');
const routes = require('./routes');
=======
// const routes = require('./routes');
const sequelize = require('./config/connection');
>>>>>>> 9ae1b84f8286a53807eebf4c1757b9f0fbbb9cd5

const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});