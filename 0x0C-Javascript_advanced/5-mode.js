function changeMode(size, weight, transform, background, color) {
	return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.background = background;
        document.body.style.color = color;
    }
}

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let myP = document.createElement("p"); 
    myP.innerText = "Welcome Holberton!";
    document.body.appendChild(myP);


    let mySpooky = document.createElement("button");
    mySpooky.id = "mySpooky";
    mySpooky.innerText = "Spooky";
    document.body.appendChild(mySpooky);

    let myDark = document.createElement("button");
    myDark.id = "myDark";
    myDark.innerText= "Dark mode";
    document.body.appendChild(myDark);

    let myScream = document.createElement("button");
    myScream.id = "myScream";
    myScream.innerText = "Scream mode";
    document.body.appendChild(myScream);

    document.getElementById("mySpooky").onclick = spooky;
    document.getElementById("dmyDark").onclick = darkMode;
    document.getElementById("myScream").onclick = screamMode;
}

main();