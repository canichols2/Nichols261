/////////////////////////////////
/////////  CSS Manip  ///////////
/////////////////////////////////
function manipulate(){
    var div = document.getElementById("test1");
    div.style.backgroundColor = "blue";
    div.style.left = "500px"
    div.style.top = "100px"
    div.style.height = "500px"
    var butt = document.body.getElementsByTagName("button")
    butt[0].style.left = "500px"
}

function manipulateBad(){
    var div = document.getElementById("test1");
    div.style.backgroundColor = 58;
    div.style.backgroundColor = null //Removes the blue background
    div.style.height = null
    div.style.height = true
//    div.style.left = "fake" //Didn't make any change to left margin
    div.style.top = "http://youtube.com"
}





///////////////////////////////////
/////////  Transitions  ///////////
///////////////////////////////////
function removeClass(){
    var div = document.getElementById("classTest1ID")
    div.className = null
    //I was expecting this to remove the class, but keep the properties attached until new ones were applied, but it removed the properties as well. 
}


//The following worked by adding a seccond class name
//to the div separated by a space
//it used the first class 
//for transition values to the second class values
function swap() {
    var box = document.getElementById("classTest1ID")
    box.className += " test"
//    if (box.className == "test")
//        box.className += " test2"
//    else if(box.className == "test2")
//        box.className = "test"
}


//The following tried doing transitions
//by replacing the class name. 
//If you remove the class name there is no transition
//from the first since the transition speed is no
//longer set
function swap2() {
    var box = document.getElementById("classTest1ID")
//    box.className += " test"
    if (box.className == "test")
        box.className = "test2"
    else if(box.className == "test2")
        box.className = "test"
}
