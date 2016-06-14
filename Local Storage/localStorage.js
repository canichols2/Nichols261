//String var
var codySpeach = "This is a speach that i am writing to tell you about my day. I would liek to start by saying that  i don't give a f**k about anything and just want to get this homework assignment done. Don't you dare try and fix me or make me into something more than what i am. I like where i'm at, and i don't need no bleeping bleep bleepmonger telling me what to do. Now i am going to the highland games this evening, well, friday, and i'm taking my GF, my BestFriend, and my other BestFriend. I love Camel Case, it's really nice. and we are going to tkae my car. THis is a great car, it just loves to break down, and i have taken it to utah like 4 times now. i drove it to and from richalnd wa 4 times (10Hour Drive. but w/e.) I just can't wait to have the *** or for my GF to ... and we could go on. I need friends because I like to brag about what i can do. I'm a very proud person."

var numbers = 8023802.22
var arrays = [45, 82, "cody", "I Don't Care"]

function person(name, age, sex, house){
    this.name = name
    this.age = age
    this.sex = sex
    this.house = house
    this.health = 10
    this.eat = function() {console.log("Munch, Munch, Munch")}
    
}
var cody = new person("Cody Nichols",24,"M","Quincy")
console.log(cody);
console.log();
console.log(JSON.stringify(cody)) //apparently stringifying an object doesn't bring with it the functions in this case "eat()"
localStorage.codyAsObject = cody;
localStorage.codyAsJSON = JSON.stringify(cody);
console.log("CodyAsObject:")
console.log(localStorage.codyAsObject)
console.log();
console.log("CodyAsJSON:")
console.log(localStorage.codyAsJSON)
console.log();
console.log("JSON.Stringify Object:")
console.log(JSON.stringify(localStorage.codyAsObject))
console.log();
console.log("JSON.Stringify JSON:")
console.log(JSON.stringify(localStorage.codyAsJSON))
console.log();
console.log("JSON.parse Object:")
//console.log(JSON.parse(localStorage.codyAsObject)) //Removed because it broke the code to the point where it wouldn't run.
console.log();
console.log("JSON.parse JSON:")
console.log(JSON.parse(localStorage.codyAsJSON))
console.log();

//From local storage, the object lost it's function. 
//at least it lost it because of json.

//Everything gets stored as a string and if you can't get it to JSON.stringify and parse, you're boned.

localStorage.numbers = numbers;
localStorage.arrays = arrays;
localStorage.codySpeach = codySpeach;

console.log(localStorage.numbers);
console.log(localStorage.arrays)
console.log(localStorage.arrays[3]) //This just places a string into localstorage and pulls the 4th character out.
console.log(localStorage.codySpeach)