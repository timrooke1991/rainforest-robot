// Format parameters from the querystring
function getParameters(req) {
  // Create parameter object to store all values from the query string
  // parseFloat required to convert required values to Number
  const parameters = {};
  let i = 0;
  parameters.conveyorBeltLocation = [parseFloat(req.query.cb_x), parseFloat(req.query.cb_y)];
  parameters.robotStartLocation   = [parseFloat(req.query.rsl_x), parseFloat(req.query.rsl_y)];
  parameters.crateDetails         = [];

  while (true) {
    if (req.query[`cd_x_${i}`] !== undefined) {
      parameters.crateDetails = parameters.crateDetails.concat(
        [
          [
            parseFloat(req.query[`cd_x_${i}`]),
            parseFloat(req.query[`cd_y_${i}`]),
            parseFloat(req.query[`cd_amount_${i}`])
          ]
        ]
      );
      i++;
    } else {
      break;
    }
  }

  parameters.route = req.query.route;
  return parameters;
}

module.exports = getParameters;
