const Band = require('./Band');
const Events = require('./Events');
const Members = require('./Members');

Band.hasMany(Events, {
    foreignKey: 'event_bands'
});

Events.belongsTo(Band, {
    foreignKey: 'event_bands',
});

Band.hasMany(Members, {
    foreignKey: 'member_band'
});

Members.belongsTo(Band, {
    foreignKey: 'member_band',
});

module.exports = {Band, Events, Members};