# Rainforest Robot

## Problem Overview

The robot can move around the warehouse floor, reach into crates to pick up bags of gummy bears, and drop the bags off at a conveyor-belt feeder. The robot is only able to pick up one bag at a time, but can carry multiple bags at once. However when dropping off the bags the robot drops all the bags in its possession at once.

The robot is controlled with the following instructions:

 - **N, S, E, W** - the robot moves one unit of distance in the direction specified (N increases the y coordinate value, E increases the x coordinate value). 
 - **P** - pick up one bag of sugar-free gummy bears from
   a crate.
 - **D** - drop the bags of sugar-free gummy bears that the robot currently has in its possession onto the conveyor-belt feeder.

A couple of issues with the robot have been found:

-   If the robot tries to retrieve a bag from a position where a crate doesn’t reside, it falls over and short-circuits. From this point onwards it no longer responds to instructions.
    
-   If the robot tries to drop bags off at a position that is any place other than the conveyor-belt feeder, the bags get caught in its wheels and it short-circuits. In this instance it also no longer responds to instructions.

## Inputs

The application takes in the following lines of input:

 1. The x, y coordinates of the position of the conveyor-belt feeder
 2. The x, y coordinates of the start position of the robot
 3. comma separated descriptions of the crates. Each crate has an x coord, y coord and quantity.
 4. A set of instructions for the robot to perform.
    
```
 0 2              // Conveyor-belt feeder is at coord 0,2
 0 0              // Robot is at coord 0,0
 0 1 10, -1 -2 5  // A crate at 0,1 with 10 bags and at -1,-2 with 5 bags
 NPPPND           // Move North, pick up a bag (x3), move north, drop bags
```

## Outputs

The application responds with the total number of bags dropped on the conveyor-belt feeder, and the final position and health of the robot (either OK or BROKEN)
    
```
 3       // 3 bags have been dropped on the conveyor-belt feeder
 0 2 OK	 // The robot is at 0,2 and still functioning
```

## Installation and setup

* Download files and extract files.
* Navigate to director in the command line.
* `yarn` or `npm install` to install dependencies.

## Testing with Mocha

* Run `mocha` to run tests.
* Test located at `./test/robot/robot_test.js`

## Running in the browser (recommended)

* Once dependancies have been installed.
* Run `node server.js`
* Go to `http://localhost:3000/`
* Here, you will be greeted with a user interface to enter your coordinates. It will return the output in JSON format. 

## Testing in Insomnia or Postman

* Once dependancies have been installed.
* Run `node server.js`.
* Open Insomnia or Postman.
* Make a GET request to the API with relevant query string parameters.
* For example, `http://localhost:3000/data?cb_x=1&cb_y=1&rsl_x=0&rsl_y=1&cd_x_0=0&cd_y_0=0&cd_amount_0=10&route=PNNEE'`

## Additional
 1. Create a command line interface
 2. Error handling
 3. Style improvements
 4. Integrate AJAX
