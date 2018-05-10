# Rainforest Robot

## Installation and setup

* Download files and extract files.
* Navigate to director in the command line.
* `yarn` or `npm install` to install dependencies.

## Testing with Mocha

* Run `mocha` to run tests.
* Test located at `./test/robot/robot_test.js`

## Running in the browser

* Once dependancies have been installed.
* Run `node server.js`
* Go to `http://localhost:3000/`

## Testing in Insomnia or Postman

* Once dependancies have been installed.
* Run `node server.js`.
* Open Insomnia or Postman.
* Make a GET request to the API with relevant query string parameters.
* Foe example, `http://localhost:3000/data?cb_x=1&cb_y=1&rsl_x=0&rsl_y=1&cd_x_0=0&cd_y_0=0&cd_amount_0=10&route=PNNEE'`
