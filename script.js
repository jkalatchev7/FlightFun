
//var searchButton = document.getElementById('destination');
var text = document.getElementById('origin');
function submitForm() {
    let tex = text.value;
    console.log(tex);
    appendPre(tex);
}

function appendPre(message) {
    var d = document.createElement('div');
    d.setAttribute("class", "entry");
    var t = document.createTextNode("We found flights to: " + message +"\n");
    d.appendChild(t);
    document.body.appendChild(d);

}
