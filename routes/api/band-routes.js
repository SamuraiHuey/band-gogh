const router = require('express').Router();
const { Band, Events, Members } = require('../../models');

router.get('/', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbBandData => res.json(dbBandData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Band.findOne({
        attributes: {
            exclude: ['password'] 
        },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Events,
                attributes: ['event_name', 'event_month', 'event_day', 'event_year', 'event_location']
            },
            {
                model: Members,
                attributes: ['members_name']
            }
        ]
    })
    .then(dbBandData => {
        if(!dbBandData) {
            res.status(404).json({message: 'No band found with this id' });
            return;
        }
        res.json(dbBandData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    Band.create({
        band_name: req.body.band_name,
        band_website: req.body.band_website,
        genre_name: req.body.genre_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbBandData => {
        req.session.save(() => {
            req.session.user_id = dbBandData.id
            req.session.band_name = dbBandData.band_name
            req.session.loggedIn = true;

        res.json({ user: dbBandData, message: 'You are now logged In'});
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    Band.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbBandData => {
        if (!dbBandData) {
            res.status(400).json({ message: 'No user with that username'});
            return;
        }

        validPassword = dbBandData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbBandData.id;
            req.session.band_name = dbBandData.band_name;
            req.session.loggedIn = true;

            req.json({ user: dbBandData, message: 'You are not logged in' });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

router.put('/:id'), (req, res) => {

    Band.update(req.body, {
        individualHooks: true,
        where: {
            id: req.rarams.id
        }
    })
    .then(dbBandData => {
        if (!dbBandData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbBandData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}

router.delete('/:id', (req, res) => {
    Band.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBandData => {
        if (!dbBandData) {
            res.status(404).json({message: 'No band found with this id'});
            return;
        }
        res.json(dbBandData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});





module.exports = router;