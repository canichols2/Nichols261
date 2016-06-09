var cancel = false


///////////////////////////
///////////Loops///////////
///////////////////////////
//Happy Path
console.log("For Loop Happy")
for (i=0; i<15; i++) {
    console.log(i)
}
var x=0
console.log("While Loop Happy")
while (x < 15) {
    console.log(x)
    x++
}

//Nasty Path
function nastyFor() {                       //This is broken, it can't jump out with my button so it just goes forever
    console.log("For Loop Nasty infinate")
    for (i=0; ; i++) {
        console.log(i)
        if (cancel) { break; }
    }
    cancel = false
}


function nastyWhile() {
    x=1                                     //I made x start at 1 instead of 0 so the loop would be infinate
    console.log("While Loop Nasty No Args") 
    console.log("creates a syntax error")
    console.log("")
    console.log("while loop with no comparison opperator")    
    while (x) {
        colsole.log(x)                      //because it's checking the value of x, and if x was 0 then it wouldn't run being 0 (false)
        x++
        if (cancel) { break; }
    }
    cancel = false
}

///////////////////////////
///////////Arrays//////////
///////////////////////////

//happy path Arrays
var myArray = ["Cody is cool", 
               "Cody Sucks", 
               "I hate you", 
               "Try again later", 
               "You don't know what you have done", 
               8253,                                //Arrays in JS can have multiple value types
               8283223,
               "Forget it"]

function loopArray() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
}

function addToArray() {
    myArray.push("newValueGoesHere")
    myArray[myArray.length] = "AnotherNewValue"
}


//Nasty Path Arrays
//Aparently Javascript is more resiliant than I gave it credit for.
function test() {return "test";}
var badArray = [
    "this is text"                          //String
    , 99999                                 //Numbers
    , test()                                //function in an array
    , function fun() { console.log('badArray functionFun() called'); return 8; }          //function created in array
    , new function dumb() {return 42;}      //I really thought this would break it. I was mistaken.
    //I'm guessing this is more of an object than just an array, but it's actually not that either. just an array
]
console.log("the next item is supposed to call the 'Fun' function in badArray")
badArray[3]() //This is supposed to call fun

function DisplayBadArray() {
    for (i=0; i < badArray.length; i++)
        console.log(badArray[i]);
    //Lets go ahead and call that last bad function in the array/object
    console.log(badArray.dumb()) //Aparently, you can't call a function out of an array like this.
    console.log(badArray[4]()) //Or Like This
    //Lets call fun() function to see if it works now???
        //console.log(badArray.fun())
    //it didn't work
}


////////////////////////////
//Functions and Parameters//
////////////////////////////

//The function i will be plaing with
function overload1(fool, of, a, took) {
    console.log(fool)
    console.log(of)
    console.log(a)
    console.log(took)
}

//Happy Path, we know this will work.
function functionHappy() {
    overload1("I", "Know", "This", "Works")     //and it worked
}

function FunctionNasty() { //if you passed paramaters to this, you still have a way to grab them
    //Overlaod
    console.log("")
    overload1("I", "Don't","Know","If","This","Will","Work")    //It doesn't do anything with the last 3...
    
    //Underload
    console.log("")
    overload1("or","This")          //outputs or /n This /n undefined /n undefined
    
    //Pass a function call and a function and an array
    console.log("")
    overload1(
        "This is a function",   //Displays as expected
        functionHappy(),        //displays undefined, but calls and executes functionHappy() prior to sending anything to overload1()
        functionHappy,          //displays entire function code but does not execute
        badArray)               //displays (in chrome) as an object(text)
}






////////////////////////////
/////Associative Arrays/////
////////////////////////////


var assArray =
    {
        "firstName" : "Cody",
        "lastName" : "Nichols",
        "fullName" : this.firstName + this.lastName     //Something with this syntax doesn't work. because "this" calls the window
    }


function goodPassAssArray() {
    console.log("First Name: " + assArray.firstName)
    console.log("Last Name: " + assArray.lastName)
    console.log("Full Name: " + assArray.fullName)
}



//////////////////////
// happy paths for inserting into an array
/////////////////////////


//////////////////////
// nasty paths into array
///////////////////////

////////////
// pop an array that's empty
// shift and unshift. play with them.
///////////

var arry = []
console.log(arry.length)
arry.pop()                  //It didn't do anything...
//this should work. try it.
arry.push("first item")
arry.push("seccond item")
arry.push("third item")
console.log(arry)
var nothing = arry.unshift()
arry.push(arry.unshift())   //Adds nothing, and returns the size
arry.push(arry.unshift())
arry.push(arry.unshift())
arry.push(arry.unshift("third item"))
console.log(arry)
//.unshift() places an item into the array
//shift() does what?
arry.push(arry.shift())
console.log(arry)
console.log(arry.unshift())
console.log(arry.length)







//A way to exit the infinate loops
//Turns out, while a for loop is executing, you can't call another function. so this is a nasty path
function cancel() {
    cancel = true;
}