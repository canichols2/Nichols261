var XMLHTTP = new XMLHttpRequest();
//This url is for Wind Speed in Chicago
var URL = "https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
XMLHTTP.onreadystatechange = function() {
    if (XMLHTTP.readyState == 4 && XMLHTTP.status == 200) {
        var JSONObject = JSON.parse(XMLHTTP.responseText)
        console.log(JSONObject) //I just wanted to make sure there was text here
        
        //Happy Pass--Output data to result
        document.getElementById("result").innerHTML += "Chicago Wind Speed: " + JSONObject.query.results.channel.wind.speed + "mph" + "<br>"
        //Grabs Wind Direction
        document.getElementById("result").innerHTML += "Direction: " + windDirection(JSONObject.query.results.channel.wind.direction) + "<br>"
        
        //Nasty Pass--Output object to result
        document.getElementById("result").innerHTML += "Chicago All: " + JSONObject.query.results.channel.wind + "<br>"
    }
}

function windDirection(degrees) {
    arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    val = (degrees/22.5)+.5
    return arr[(Math.floor(val))]
}

XMLHTTP.open("POST", URL, "Blue")
XMLHTTP.send()

//in .open(...) throw crap into here
//anywhere there is a string, you can throw shit. you are a spider monkey

//XMLHTTP.open("GET", URL, false)
//cannot read property of 'innerHTML' of null
    //That doesn't make sense. it can't find innerHTML when this says false??? interesting...
//Still was able to get object and output to console

//XMLHTTP.open("ASHER", URL, true)
//Error Message:
    //Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
//XMLHTTP.open("POST", URL, true)
    //It worked great. must just be a different retrieval method.


//XMLHTTP.open(POST, URL, true)
    //Says POST is not defined
    //Wich makes sense...

//XMLHTTP.open("POST", URL, "Blue")









