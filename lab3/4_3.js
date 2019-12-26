let countOfBottles = prompt("Count of bottles?", 50);

if( countOfBottles > 0){
    while ( countOfBottles >= 0 ) {
        if ( countOfBottles == 0 ){
            document.write("There are no bottles on the wall");
        }
        else if ( countOfBottles == 1 ) {
            document.write("There is 1 bottle on the wall" + "<br>");
        }
        else ( document.write(`There are ${countOfBottles} bottles the wall` + "<br>"))
        countOfBottles--;
    }
}
else {
    document.write("There are 0 bottles on the wall");
}