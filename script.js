
//var searchButton = document.getElementById('destination');
var text = document.getElementById('origin');
function submitForm() {
    let tex = text.value;
    console.log(tex);
    document.getElementById("firstBox").style.display = "block";
    appendPre(tex);
}

function appendPre(message) {
    var d = document.createElement('div');
    d.setAttribute("class", "entry");
    var t = document.createTextNode("We found flights to: " + message +"\n");
    d.appendChild(t);
    document.body.appendChild(d);

}

function clearText() {
    let hol = document.getElementsByClassName("entry");
    while (hol.length != 0) {
        hol[0].remove();
    }
    
    document.getElementById("firstBox").style.display = "none";
}