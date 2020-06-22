function createElement(data) {
    let myP = document.createElement("p"); 
    myP.innerText = data;
    document.body.appendChild(myP);
}

function queryWikipedia(callback) {
    let reqxml = new XMLHttpRequest();
    reqxml.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    reqxml.send();
    reqxml.onload = function () {
        if (reqxml.status >= 200) {
            let dt = JSON.parse(reqxml.response);
            let text = dt.query.pages[21721040].extract
            callback(text)
        } else {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    };

}

queryWikipedia(createElement)