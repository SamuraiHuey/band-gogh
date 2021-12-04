// const sequelize = require('../config/connections');
const { Band } = require('../models');

const logins = [
  {
    id: '001',
    band_name: 'Gwar',
    band_website: 'https://gwar.net/',
    genre_name: 'Metal',
    username: 'gwar1984',
    email: 'gwar@gwarbar.com',
    password: 'password123',
  },
  {
    id: '002',
    band_name: 'Carbon Leaf',
    band_website: 'http://www.carbonleaf.com/',
    genre_name: 'Rock',
    username: 'carbon1992',
    email: 'carbon@leaf.com',
    password: 'password123'
  },
  {
    id: '003',
    band_name: 'Pat McGee',
    band_website: 'patmcgee.net',
    genre_name: 'Country',
    username: 'mcgee1996',
    email: 'pat@mcgee.com',
    password: 'password123'
  },
  {
    id: '004',
    band_name: 'River City High',
    band_website: 'https://en.wikipedia.org/wiki/River_City_High',
    genre_name: 'Rock',
    username: 'rch1999',
    email: 'rivercity@high.com',
    password: 'password123'
  },
  {
    id: '005',
    band_name: 'Cannabis Corpse',
    band_website: 'https://cannabiscorpseofficial.bandcamp.com',
    genre_name: 'Punk',
    username: 'cannabis1996',
    email: 'cannabis@corpse.com',
    password: 'password123'
  },
  {
    id: '006',
    band_name: 'Sparklehorse',
    band_website: 'https://www.marklinkous.com/',
    genre_name: 'Rock',
    username: 'sparklehorse1995',
    email: 'mark@sparkle.com',
    password: 'password123'
  },
  {
    id: '007',
    band_name: 'Four Walls Falling',
    band_website: 'https://fourwallsfalling413.bandcamp.com/album/four-walls-falling',
    genre_name: 'Punk',
    username: 'fwf1983',
    email: 'fourwalls@falling.com',
    password: 'password123'
  },
  {
    id: '008',
    band_name: 'Alabama Thunderpussy',
    band_website: 'https://alabamathunderpussyband.bandcamp.com/album/open-fire',
    genre_name: 'Metal',
    username: 'thunderpussy1996',
    email: 'alabama@thunderpussy.com',
    password: 'password123'
  },
  {
    id: '009',
    band_name: 'Down to Nothing',
    band_website: 'https://downtonothing.bandcamp.com/album/live-on-the-james',
    genre_name: 'Punk',
    username: 'dtn2000',
    email: 'downto@nothing.com',
    password: 'password123'
  },
  {
    id: '010',
    band_name: 'The Virginians',
    band_website: 'https://www.virginians.org/',
    genre_name: 'Country',
    username: 'va1952',
    email: 'the@virginians.com',
    password: 'password123'
  }
];

const seedLogins = () => Band.bulkCreate(logins, {individualHooks: true});

module.exports = seedLogins;