/**
 * Defines routes for the Express app using the router middleware.
 * - Imports the apiRoutes to handle API endpoints
 * - Handles requests to the /api route using apiRoutes
 * - Catches all other routes and sends a "Wrong Route" response
 */
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
