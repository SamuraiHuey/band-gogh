const seedEvents = require('./seeds-events');
const seedLogins = require('./seeds-logins');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedEvents();
    console.log('\n----- EVENTS SEEDED -----\n');
  
    await seedLogins();
    console.log('\n----- LOGINS SEEDED -----\n');
    
    process.exit(0);
};

seedAll()