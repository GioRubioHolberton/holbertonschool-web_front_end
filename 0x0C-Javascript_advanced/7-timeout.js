console.log("Start of the execution queue");
setTimeout(function(){ console.log("Final code block to be executed"); }, 0);
for (let a = 1; a < 100 ; a++) {
	console.log(a);
}

console.log("End of the loop printing");