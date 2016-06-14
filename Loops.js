function multiplyP(x, y){
    return x * y;
}

function NmultiplyP(x, y){
//    this uses c++ notation for functions
    return x * y;
}

//  add x to itself, y times
function addingLoop(x, y){
    for (i = 0; i < y; i++)
        {
            x += x;
        }
}

//  infinate loop
function NLoopInfinate( )
{
    eraseDiv();
    
    for ( i = 0; i < 0 ; i++ )
        {
            document.getElementById("result1").innerHTML += "You have caused an infinate loop, you idiot/n";
        }
}


function eraseDiv()
{
    document.getElementById("result1").innerHTML = '';
}


function broken()
{
//    test = 8;
//    console.log("BeforeForLoop: " + test);
    for( let test = 0; test < 5; test++)
    {
        let test2 = 19;
        console.log("InsideForLoop: " + test)
    }
    console.log("AfterForLoop: " + test)
}










