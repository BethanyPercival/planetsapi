//routes/index.js

const planetRoutes = require('./planet_routes');

module.exports = function(app, db) {
	planetRoutes(app, db);
	//other route groups can go here in the future
};
