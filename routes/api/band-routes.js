const router = require('express').Router();
const { Band, Events, Members } = require('../../models');

router.get('/', (req, res) => {
    Band.findAll({
        attributes: {
            exclude: [password]
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
        where: {
            id: req.params.id
        },
        attributes: {
            exclude: ['password'] 
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


module.exports = router;