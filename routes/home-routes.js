const router = require('express').Router();
const sequelize = require('../config/connection');
const { Band, Events, Members } = require('../../models');

router.get('/', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const posts = dbBandData.map(band => band.get({ plain: true }));
        res,render('post', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});