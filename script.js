//import axios from "axios";

//var searchButton = document.getElementById('destination');
let text = document.getElementById('origin');
let date = document.getElementById('date');
let arr;

function getData(origin, code, date) {
    const url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/" + origin + "-sky/" + code + "-sky/" + date;
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("GET", url, false);
xhr.setRequestHeader("x-rapidapi-key", "8334b1be82msh6b0193ec25e329ap1d5320jsnbe501d429b64");
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");

xhr.send(data);
var check = setTimeout( function() {alert("Timeout")}, 2000);
while (xhr.readyState !== 4) {
}
clearTimeout(check);

let response = JSON.parse(xhr.responseText);
console.log(response);
arr = [response["Quotes"][0]["MinPrice"], response["Quotes"][0]["Direct"], response["Carriers"][0]["Name"]];

return arr;
}

function submitForm() {
    let tex = text.value;
    let dat = date.value;
    console.log(tex);
    document.getElementById("firstBox").style.display = "block";
    document.getElementById("firstBox").innerText = ("Showing flights departing " + tex + " on " + dat + "\n");
    let listCodes = ["BOS", "IAD", "SFO", "ATL"];
    let j = listCodes.length - 1;
    while (j >= 0) {
        //console.log("comparing: " + listCodes[j] + " and " + tex);
        if (listCodes[j] !== tex) {
            let data = getData(tex, listCodes[j], dat);
            console.log(data);
            appendPre(listCodes[j], dat, data[0], data[1], data[2]);
        }
        j--;
    }
}

function appendPre(message, date, minprice, direct, carrier) {
    let d = document.createElement('div');
    d.setAttribute("class", "entry");
    let num = .056;
    let str;
    if (direct) {
        str = "a direct ";
    } else {
        str = "an indirect ";
    }
    let t = document.createTextNode(carrier + " has " + str + "flight to " + message + " on " + date + " for $" + minprice + "!\n");
    d.appendChild(t);
    document.body.appendChild(d);

}

function clearText() {
    let hol = document.getElementsByClassName("entry");
    while (hol.length !== 0) {
        hol[0].remove();
    }
    document.getElementById("firstBox").style.display = "none";
}
