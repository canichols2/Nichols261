function fadeColor(el, color1){
   var elem = document.getElementById(el);
    elem.style.transition = "background 3.0s linear 0s";
    elem.style.background = color1;
}
function animNull(el) {
    var elem = document.getElementById(el)
    elem.style.animationName = "";  
}

function setSpinEl(el) {
    var elem = document.getElementById(el)
    //This didn't work.....
//    elem.style.animation = "spin 3.0s infinate"
//    elem.style.animation = "spin";
    // I tried to reset the animation to null so i could then later call it again.
//    elem.style.animationName = null;  
    //Still breaks here, doesn't seem to work..
    
    elem.style.animationName = "spin";
    elem.style.animationDuration = "3s";
    elem.style.animationIterationCount = "-3" ;    //Doesn't set any iteration so it just does one iteration (Default)
    //Nasty Pass: While manipulating CSS Properties, you must remove '-' from the css property for JS to read/use it.
    
    
    //Nasty Pass: I tried making the animation name null
    //so that it could restart when I click the button. It didn't work. :(
    //so i moved it above the first line, it seemed to work in testing, but not in practice 
    //Like when I stepped through the code line by line it worked. but not having it go on it's own.
//    elem.style.animationName = "";  //Didn't work here in same script
}


function resetAnimation(){
    var boxTemp = document.getElementById("box");

    boxTemp.addEventListener("animationstart", function(e){
        console.log("AnimationStarted")
    }, false)

    boxTemp.addEventListener("animationiteration", function(e){
        console.log(e.elapsedTime)
    }, false)

    boxTemp.addEventListener("animationend", function(e){
        console.log("Animation Ended (Add end event function here)")
        boxTemp.style.animationName = null
    }, false)

}

//nastyPass, call by className
function classSelect(el, color1){
   var elem = document.getElementsByClassName(el);
    elem.style.transition = "background 3.0s linear 0s";
    elem.style.background = color1;
}

function switchColor(){
    var div = document.getElementById('colorSwap');
//    for (var i=0; )
    if (div.className == "blue")
        div.className = "pink"
    else if(div.className == "pink")
        div.className = "blue"
    
}

//CSS properties
    // top left right bottom
        //Set to null, string, large/small numbers, strings that make no sense, empty string
                

//add listener to do something at the end
//https://www.sitepoint.com/css3-animation-javascript-event-handlers/
//then use animation-play-state: paused|running|initial|inherit;
//but in javascript .....