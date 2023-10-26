
/*-------------------------Flight------------------------------*/
var availableFlightSeats = 7;
var numberOfSeatsOnAPlane =60;
console.log("Number of Seats on a Plane are " + numberOfSeatsOnAPlane);
console.log("The number of seats left on this plane are " + availableFlightSeats);
console.log("A customer booked 2 seats... There are only " + (availableFlightSeats - 2) + " seats left.");
/*-------------------------Grocery------------------------------*/
var costOfGroceries = 89.50;
console.log("The cost of groceries was " + costOfGroceries);
console.log("Someone snuck in a candy bar to my grocery cart! (it definitely wasn't me...) The grocery total is now: " + (costOfGroceries + 2.15) );
/*------------------ -Birth Certificate--------------------------*/
var middleInitial = "J";
console.log("My middle initial is " + middleInitial);
var middleInitial = "Q";
    console.log("Oops! Middle initial is now " + middleInitial);
/*-------------------------Season------------------------------*/
var isHotOutside = false;
console.log("Is it hot outside? " + isHotOutside);
    isHotOutside = !isHotOutside;
    console.log("Seasons changed, it's now not cold ... isHotOutside = " + isHotOutside);
/*-----------------------Introduction--------------------------------*/
var firstName = "Chris";
console.log("The firstName is: " + firstName);
    var fullName = firstName + " " + middleInitial + " " + "Jacobs";
    console.log("My full name is: " + fullName);

var streetAddress = "12345 Avenue Lane MythicalState Place";
console.log("Here is a new customer! His name is: " + fullName + ". " + "He lives at " + streetAddress);
