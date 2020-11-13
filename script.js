
//var searchButton = document.getElementById('destination');
let text = document.getElementById('origin');
let date = document.getElementById('date');

function submitForm() {
    let tex = text.value;
    let dat = date.value;
    console.log(tex);
    document.getElementById("firstBox").style.display = "block";
    appendPre(tex, dat);
}

function appendPre(message, date) {
    let d = document.createElement('div');
    d.setAttribute("class", "entry");
    let t = document.createTextNode("We found flights to: " + message + " on " + date + "\n");
    //document.getElementById("firstBox").setAttribute("textContent", ("Showing flights departing: " + message));
    //blah
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