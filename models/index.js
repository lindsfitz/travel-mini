const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');


Traveller.hasMany(Trip);
Trip.belongsTo(Traveller)


Location.hasMany(Trip)
Trip.belongsTo(Location)


// Location.belongsToMany(Traveller, {through: Trip})
// Traveller.belongsToMany(Location, {through: Trip})


module.exports = { Traveller, Location, Trip }