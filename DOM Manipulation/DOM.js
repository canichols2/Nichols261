var newP = document.createElement("p");
var newDiv = document.createElement("div");
var newH1 = document.createElement("h1");
var TextForElements = document.createTextNode("This is a text node");
var Text = "This is just text pushed into elements";
newDiv.appendChild(newP);
newDiv.appendChild(TextForElements);
newDiv.insertBefore(newH1, newP);

//Everything works like expected, except this. 
//Error: cannot read property 'appendChild' of null
//document.body.appendChild(newDiv);
//it works in the w3schools example:
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
//but not in the actual webpage.
var body1 = document.getElementById("mainBody");

console.log(document);
console.log(document.getElementById("mainBody"));
console.log(body1);
body1.appendChild(newDiv);
//Tried doing it another way, but still says null.