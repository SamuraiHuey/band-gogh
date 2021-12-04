const sequelize = require('../config/connections');
const {genre} = require('../models');

const genre = [
  {
    id: '001',
    genre_name: 'Rock',
    genre_bands:'Gwar',
    genre_events: '',
    band_name: 'Gwar',
    band_website: 'https://gwar.net/',
    username: 'gwar1984',
    email: 'gwar@gwarbar.com',
    password: 'password123',
  },
  {
    id: '002',
    genre_name: 'Rock',
    genre_bands:'Carbon Leaf',
    genre_events: '',
    band_name: 'Carbon Leaf',
    band_website: 'http://www.carbonleaf.com/',
    username: 'carbon1992',
    email: 'carbon@leaf.com',
    password: 'password123'
  },
  {
    id: '003',
    genre_name: 'Country',
    genre_bands:'Pat McGee',
    genre_events: '',
    band_name: 'Pat McGee',
    band_website: 'patmcgee.net',
    username: 'mcgee1996',
    email: 'pat@mcgee.com',
    password: 'password123'
  },
  {
    id: '004',
    genre_name: 'Rock',
    genre_bands:'Rivery City High',
    genre_events: '',
    band_name: 'River City High',
    band_website: 'https://en.wikipedia.org/wiki/River_City_High',
    username: 'rch1999',
    email: 'rivercity@high.com',
    password: 'password123'
  },
  {
    id: '005',
    genre_name: 'Metal',
    genre_bands:'Cannabis Corpse',
    genre_events: '',
    band_name: 'Cannabis Corpse',
    band_website: 'https://cannabiscorpseofficial.bandcamp.com',
    username: 'cannabis1996',
    email: 'cannabis@corpse.com',
    password: 'password123'
  },
  {
    id: '006',
    genre_name: 'Rock',
    genre_bands:'Sparklehorse',
    genre_events: '',
    band_name: 'Sparklehorse',
    band_website: 'https://www.marklinkous.com/',
    username: 'sparklehorse1995',
    email: 'mark@sparkle.com',
    password: 'password123'
  },
  {
    id: '007',
    genre_name: 'Rock',
    genre_bands:'Four Walls Falling',
    genre_events: '',
    band_name: 'Four Walls Falling',
    band_website: 'https://fourwallsfalling413.bandcamp.com/album/four-walls-falling',
    username: 'fwf1983',
    email: 'fourwalls@falling.com',
    password: 'password123'
  },
  {
    id: '008',
    genre_name: 'Rock',
    genre_bands:'Alabama Thunderpussy',
    genre_events: '',
    band_name: 'Alabama Thunderpussy',
    band_website: 'https://alabamathunderpussyband.bandcamp.com/album/open-fire',
    username: 'thunderpussy1996',
    email: 'alabama@thunderpussy.com',
    password: 'password123'
  },
  {
    id: '009',
    genre_name: 'Rock',
    genre_bands:'Down to Nothing',
    genre_events: '',
    band_name: 'Down to Nothing',
    band_website: 'https://downtonothing.bandcamp.com/album/live-on-the-james',
    username: 'dtn2000',
    email: 'downto@nothing.com',
    password: 'password123'
  },
  {
    id: '010',
    genre_name: 'Country',
    genre_bands:'The Virginians',
    genre_events: '',
    band_name: 'The Virginians',
    band_website: 'https://www.virginians.org/',
    username: 'va1952',
    email: 'the@virginians.com',
    password: 'password123'
  }
];

const seedGenre = () => User.bulkCreate(genre, {individualHooks: true});

module.exports = seedGenre;