const path = require('path');
const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
// const expbs = require('express-handlebars')

const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('handlebars', expbs());
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

// app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});