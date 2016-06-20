function manipulate(){
    var rollup = document.getElementsByTagName("h6");
    console.log(rollup);
    console.log("We are about to add event listener to elem...")
    for (var i=0; i < rollup.length; i++) {
        console.log("We are in for loop")
        console.log(rollup)
//        console.log("")
        rollup[i].addEventListener('click', function(e){
            var parent = e.target.parentElement
            parent.style.transition = "all .15s ease"
            parent.style.transitionProperty = "all"
            parent.style.transitionDuration = ".5s"
            parent.style.transitionTimingFunction = "ease"
            parent.style.overflowY = "hidden"
            if (parent.style.maxHeight != "5em"){
                parent.style.maxHeight = "5em"
            } else {
                parent.style.maxHeight = null
            }
            console.log(e)
            console.log(e.target)
            console.log(e.target.parentElement)
            console.log(e.target.parentNode)
    }, false)
    }
}

//select <h6> element
    //assign to variable elem1
        //These happen later...
        //select elem1's parent
            //assign to variable elem1Parent
//add even listener to all <h6> elements on click do function
//idea of what might work...
function rollup(){
    elem1.parent.style.transition = "all .15s ease";
//    if (elem1.parent.style.maxHeight == "1em")
//        elem1.parent.style.maxHeight = null;
//    else
//        elem1.parent.style.maxHeight = 1em;
}