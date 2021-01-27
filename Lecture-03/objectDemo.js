/***************************************************
 * JavaScript for Beginners
 * JS101 - JSON Demo
 *
 * BASICS    : JSON Format
 * STRINGIFY : Javascript to JSON
 * PARSE     : JSON to JavaScript
 ****************************************************/


// Think of a simple JavaScript object with data (property values)
const book = new Object({ title : "1984", author: "George Orwell"});
console.log("\n -------- ")
console.log(typeof book);
console.log(book);


// You can also have a collection of these objects
const myBooks = [
    new Object({ title : "1984", author: "George Orwell"}),
    new Object({ title : "Becoming", author: "Michelle Obama"}),
    new Object({ title : "Snow Crash", author: "Neal Stephenson"}),
    new Object({ title : "Predictably Irrational", author: "Dan Ariely"})
];
console.log("\n -------- ")
console.log(typeof myBooks);
console.log(myBooks);



// What if you had a Library service that you need to send the
// data to - e.g., myBooks is the list of books being checked out
// 
// Or you want to store the data to a remote database, or to the
// local filesystem - many networking and file transfer protocols 
// rely on simple text formats for request/response
//
// JSON = JavaScript Object Notation
// Convert JavaScript objects and arrays 
// to/from text (string) format



// JSON.stringify - object input
console.log("\n -------- ")
let bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);



// JSON.stringify - collection input
console.log("\n -------- ")
let myBooksJSON = JSON.stringify(myBooks);
console.log(myBooksJSON);



// JSON.parse - string input
let data = bookJSON;
let parsed = JSON.parse(data);
console.log("\n -------X- ")
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: "+parsed.length);



// JSON.parse - string input
data = myBooksJSON;
parsed = JSON.parse(data);
console.log("\n -------- ")
console.log(parsed);
console.log(Array.isArray(parsed));
console.log("Num items: "+parsed.length);
console.log("Author of 2nd book: "+parsed[1].author);
/***************************************************
 * JavaScript for Beginners
 * JS101 - Objects Demo
 *
 * BASICS    : What are Objects?
 * SYNTAX    : Defining Objects
 * CREATION  : Object Literals & Constructors
 * PROPERTIES: Associated Variables
 * METHODS   : Associated Functions
 * "this"    : Associated Context
 ****************************************************/
 
/* START */

// How can you represent real-world objects in code?
// They have associated attributes = object PROPERTIES
// They have associated actions = object METHODS
// They have associated context = "this"

/*
// First:
// Let's define a simple object (with no properties or methods)
const blank = {};
console.log("Blank type:",typeof blank);
console.log("Blank value",blank);
*/

/*
// Next:
// Let's define an object with PROPERTIES (attributes)
// Objects are just a collection of name-value pairs
// separated by commas
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
*/


/*
// Next:
// Let's add actions we can take on it
// Note that these are properties too - defined as functions
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false,
    checkIn: function(){ this.isAvailable = true; },
    checkOut: function(){ this.isAvailable = false; }
};
console.log("Book type:",typeof book);
console.log("Book value:\n",book);

*/

// Next:
// We created objects above using OBJECT LITERALS
// (it is literally defined and created at once)
// Now we can look at using CONSTRUCTORS
// Constructors are like "templates" for an object
//  - they explain HOW the object is created
//  - to actually create an instance use "new"
//
// We'll look at using a base constructor called ..
// Object

/*
const book = new Object();
console.log("\n--- Define book");
console.log("Book type:",typeof book);
console.log("Book value:\n",book);
*/
/*

const data = {title:"1984",author:"George Orwell"};
const book1 = new Object(data);
console.log("\n--- Define book1 with data");
console.log("Book1 type:",typeof book1);
console.log("Book1 value:\n",book1);
*/


const dataFunc = {
    title:"1984",
    author:"George Orwell",
    isAvailable: true,
    checkIn: function(){ this.isAvailable = true; },
    checkOut: function(){ this.isAvailable = false; }
};
const book2 = new Object(dataFunc);
console.log("\n--- Define book2 with data and functions");
console.log("Book2 type:",typeof book2);
console.log("Book2 value:\n",book2);


 // Next:
 // Let's talk about PROPERTIES and METHODS
 // How to accesss them
 // How to use them

 
 // Dot Notation

console.log('----- . notation');
console.log(book2.author);
book2.author="G. Orwell";
console.log(book2);
 // Brackets Notation
console.log(book2["author"]);
book2["author"]="G. Xorwell";
console.log(book2);
 
 // Dot Notation
 console.log(book2.isAvailable);
 book2.checkOut();
 console.log(book2);
 // bracket Notation
 console.log(book2.isAvailable);
 book2["checkOut"]();
 console.log(book2);



 // Last:
 // Let's talk about "this"


const bookObj = {
     checkIn: function(){
         return this;
     }
 }
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj);

function anotherCheckIn(){
    return this;
}
console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);



/* END */