const router = require('express').Router();

const bandRoutes = require('./band-routes.js');

router.use('/bands', bandRoutes);


module.exports = router; 