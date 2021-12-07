const sequelize = require('../config/connections');
const { Events } = require('../models');

const events = [
  {
    id: '001',
    event_name: 'Gwar Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '001',
    event_genres: '001',
  },
  {
    id: '002',
    event_name: 'Carbon Leaf Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '002',
    event_genres: '002'
  },
  {
    id: '003',
    event_name: 'Pat McGee Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '003',
    event_genres: '003'
  },
  {
    id: '004',
    event_name: 'River City High Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '004',
    event_genres: '004'
  },
  {
    id: '005',
    event_name: 'Cannabis Corpse Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '005',
    event_genres: '005'
  },
  {
    id: '006',
    event_name: 'Sparklehorse Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '006',
    event_genres: '006'
  },
  {
    id: '007',
    event_name: 'Four Walls Falling Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '007',
    event_genres: '007'
  },
  {
    id: '008',
    event_name: 'Alabama Thunderpussy Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '008',
    event_genres: '008'
  },
  {
    id: '009',
    event_name: 'Down to Nothing Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '009',
    event_genres: '009'
  },
  {
  id: '010',
    event_name: 'The Virginians Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    event_bands: '010',
    event_genres: '010'
  },
];

const seedEvents = () => Events.bulkCreate(Events, {individualHooks: true});
module.exports = seedEvents;