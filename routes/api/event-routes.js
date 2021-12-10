const router = require('express').Router();
const { Band, Events } = require('../../models');

router.get('/', (req, res) => {
    Events.findAll({
        include: [
            {
                model: Band,
                attributes: [ 'band_name', 'genre_name']
            }
        ]
    })
    .then(dbEventsData => {res.json(dbEventsData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Events.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Band,
                attributes: [ 'band_name', 'genre_name']
            }
        ]
    })
    .then(dbEventsData => {
        if (!dbEventsData) {
            res.status(404).json({ message: 'No event with this id' });
            return;
        }
        res.json(dbEventsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.put('/:id', (req, res) => {
//     Events.update(
//         {

//         }
//     )
// })

router.post('/', (req, res) => {
    Events.create({
        event_name: req.body.event_name,
        event_month: req.body.event_month,
        event_day: req.body.event_day,
        event_year: req.body.event_year,
        event_location: req.body.event_location,
        event_bands: req.session.user_id
    })
    .then(dbEventsData => res.json(dbEventsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/:id', (req, res) => {
    Events.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEventsData => {
        if (!dbEventsData) {
            res.status(404).json({ messag: 'No user found with this id'});
            return;
        }
        res.json(dbEventsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;