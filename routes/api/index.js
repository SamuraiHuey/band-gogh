const router = require('express').Router();

const bandRoutes = require('./band-routes.js');
const eventRoutes = require('./event-routes.js');

router.use('/bands', bandRoutes);
router.use('/events', eventRoutes);


module.exports = router; 