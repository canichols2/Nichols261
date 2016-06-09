//////////////////////////
///////Var Object/////////
//////////////////////////

//var randomPerson
    //I first tried declaring and using any generic variable as an object. becuase to my understanding EVERYTHING is JS was an object
    //However, it must be declared as such in the following manner.
var randomPerson = new Object
randomPerson.age = '4'
randomPerson.firstName = "Cody"
randomPerson.lastName = "Nichols"
randomPerson.race = "white"
randomPerson.schedule = {"8AM" : "CIT261","12PM":"Operations Shift for Arden"}
randomPerson.items = ["", "Laptop", "Crayons", "Xbox 360"]
randomPerson.fullName = function() {return this.firstName + " " + this.lastName}

console.log(randomPerson.items)
console.log(randomPerson.schedule)
randomPerson.items.push("Galaxy Note 4")
console.log("going to try and log entire object")
console.log(randomPerson)

///////////////////////////
////Pre Defined Objects////
///////////////////////////

function person(name, age, sex, house){
    this.name = name
    this.age = age
    this.sex = sex
    this.house = house
    this.health = 10
    this.eat = function() {console.log("Munch, Munch, Munch")}
    
}

function student(name, age, sex, house, classTime, className){
    person.call(this, name, age, sex, house)
    
    //I use "Arguments" array to call any extra classes to add to student that aren't made mention in the function definition.
    //
    this.schedule = {}
    console.log(arguments)
    for (i = 4; i < arguments.length; i+=2){
        this.schedule[ arguments[i] ] = arguments[i + 1]
    }
}

var Cody = new student("Cody",24,"M","Quincy"
                       ,"8AM","CIT261"
                       ,"12PM","Work Covering Arden"
                       ,"3PM","Dropped Class, Free Time"
                       ,"9PM","Homework"
                       ,"10PM","Group Meeting")
console.log(Cody)
callSchedule()
console.log(Cody.name + "'s Attributes:")
console.log("Age: " + Cody.age)
console.log("Gender: " + Cody.sex)
Cody.eat()
Cody.eat()
function callSchedule(){
    console.log("Schedule: ")
    console.log(Cody.schedule)
}



///////////////////////////
////Pre Defined Objects////
///////Nasty Passes////////
///////////////////////////
function studentNasty(name, age, sex, house, classTime, className){
    person(this, name, age, sex, house)    //Runs the function, but not make it part of Student
    
    //I use "Arguments" array to call any extra classes to add to student that aren't made mention in the function definition.
    console.log(arguments)
    for (i = 4; i < arguments.length; i+=2){
        this.schedule[ arguments[i] ] = arguments[i + 1]    
        //I try setting properties in the associative arrray, without creating an associative array.
        
    }
}

var CodyNasty = new studentNasty("Cody", 24, "Male", "Quincy C")
console.log(CodyNasty)



//use person.call but don't pass "this" or pass "null"



//Multiple inheritence
function teacher(){
    laptop.call(this)
    person.call(this,"Barney",80,"Male","Lamprecht Hall")
    student.call(this,"Asher",24,"Male","Lamprecht Hall") //this calls person a second time... so i gave it other names to test what happens
}

//circular inheritance A > B > C > A
function teacherA(){
    teacherB.call(this)
}

function teacherB(){
    teaacherC.call(this)
}
function teacherC(){
    teacherA().call(this)
}









