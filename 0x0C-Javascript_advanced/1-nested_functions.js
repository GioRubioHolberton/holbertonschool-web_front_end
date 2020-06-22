let globalVariable = "Welcome";
function outer(){
	alert(globalVariable);
    course = " Holberton";
    function inner() {
        exclamation = "!";
    	alert(globalVariable + course);
        function inception(){
        	alert(globalVariable + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();