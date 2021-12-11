const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { Band, Events, Members } = require('../models');

router.get('/', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const posts = dbBandData.map(band => band.get({ plain: true }));
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/events', (req, res) => {
    Events.findAll({
        include: [
            {
                model: Band,
                attributes: [ 'band_name', 'genre_name']
            }
        ],
        order: [
            ['created_at', 'DESC'],
        ]
    })
    .then(dbEventData => {
        const events = dbEventData.map(event => event.get({ plain: true }));
        res.render('events', {
            events,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/post', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const posts = dbBandData.map(band => band.get({ plain: true }));
        res.render('post', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/events', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const events = dbBandData.map(band => band.get({ plain: true }));
        res.render('events', {
            events,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/genres', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const posts = dbBandData.map(band => band.get({ plain: true }));
        res.render('genres', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
    Events.findAll({
        include: [
            {
                model: Band,
                attributes: [ 'band_name', 'genre_name']
            }
        ]
    })
    .then(dbEventData => {
        const events = dbEventData.map(event => event.get({ plain: true }));
        res.render('signup', {
            events,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/contact', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => {
        const posts = dbBandData.map(band => band.get({ plain: true }));
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
