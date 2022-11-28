 //create a promt that allows user to input speed of the car

 const readline = require('readline');
 const input = readline.createInterface(
     {
         input: process.stdin,
         output: process.stdout
     }
 );
 
 // Write  a function that calculates demerit point for every 5km/s obove the speed limit of 70
 // The output should print out total demerit point
 input.question("Speed of the car: ", function (speedLimit) {
     let demeritPoints = (speedLimit-70)/5
 
 if (speedLimit<= 70) {
     process.stdout.write("Ok");
 }
 else if ( speedLimit > 70) {
     process.stdout.write(demeritPoints);
     if (demeritPoints>= 12) {
         process.stdout.write('License suspended');
     }
 }
 input.close ();
 
 })