const router        = require('express').Router();
const instructions  = require('./../lib/robotLogic');
const getParameters = require('./../lib/getParameters');

// INDEX
router.get('/', (req, res) => res.render('index'));

// JSON STATUS PAGE
router.get('/data', (req, res) => {
  // Get parameters from querystring
  const { conveyorBeltLocation, robotStartLocation, crateDetails, route } = getParameters(req);

  // Run robot functionality
  const status = instructions.robotLogic(conveyorBeltLocation, robotStartLocation, crateDetails, route);

  // Send back status
  res.json({ status });
});

module.exports = router;
