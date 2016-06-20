function createElements() {
    var newP = document.createElement("p")
    var br = document.createElement("br")
    var newDiv = document.createElement("div")
    var newH1 = document.createElement("h1")
    var dog = document.createElement("dog")
    var TextForElements = document.createTextNode("This is a text node<br>")
    var Text = "This is just a text string pushed into elements<br>"
    newDiv.appendChild(newP)
    newDiv.appendChild(dog)
    //newP.appendChild(Text);  //Just placing text here doesn't work. it just needs to be a node
    newDiv.appendChild(TextForElements)
    //newH1.appendChild("This is a header:"); //same thing, no text here, just node.
    newDiv.insertBefore(newH1, newP)


    document.body.appendChild(newDiv)

    //Everything i am creating form here on out, i am inserting directly into the webpage, not into variables created here then later inserted into the page. 
///////////I wasn't even sure if i could do that once the elements were created. 
///////////I thought once you added it to the HTML, it coppied it from the JS variable to somehting in HTML. but they are exactly the same element. the variable is still associated with one
    var body1 = document.getElementById("mainBody")
    var textForP = document.createTextNode("textNode created for paragraph, placed into variable.")
    newP.appendChild(textForP)
    newP.appendChild(br)
    newH1.appendChild(document.createTextNode("This is a header TextNode:"))
    newP.appendChild(document.createTextNode("This is the text that i am creating inside of the <p> Tag. But i am also crating it inside a Document.CreateTextNode() function inside an appendChild() which is like elemtception. because that's a word."))
    
    newP.setAttribute("id","Para")
    newH1.setAttribute("id","Header")
    newDiv.appendChild(document.createElement("br"))
    
    
}


function removeElement() {
    var toRemove = document.getElementById("Para")
//           Multiple Elements with ID Para. it grabs the first.
//           ParentNode is cool. i don't need to know the name of the parent to call it.
    toRemove.parentNode.removeChild(toRemove)
}

function createVideo() {
    var createdDiv = document.getElementById("Para").parentNode
    var vidTag = document.createElement("video")
    vidTag.setAttribute("id","video1")
    //How do i add video source attributes inside this tag?
    vidTag.src = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    createdDiv.appendChild(vidTag);
    vidTag.autoPlay = true;
    vidTag.controls = true;
}

// try adding buttons, videos, sound.
// try fake elements. like dogpoop.
// 


