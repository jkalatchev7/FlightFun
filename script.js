//import axios from "axios";

//var searchButton = document.getElementById('destination');
let text = document.getElementById('origin');
let date = document.getElementById('date');

function getData(origin, code, date) {
    const url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/" + origin + "-sky/" + code + "-sky/" + date;
const settings = {
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8334b1be82msh6b0193ec25e329ap1d5320jsnbe501d429b64",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
};
let arr;
$.ajax(settings).done(function (response) {
	//return response;
    //return [response["Quotes"][0]]
    arr = [response["Quotes"][0]["MinPrice"], response["Quotes"][0]["Direct"], response["Carriers"][0]["Name"]];
	//console.log()
});
return arr;
}

function submitForm() {
    let tex = text.value;
    let dat = date.value;
    console.log(tex);
    document.getElementById("firstBox").style.display = "block";
    document.getElementById("firstBox").innerText = ("Showing flights departing " + tex + " on " + dat + "\n");
    let listCodes = ["SFO", "FLL"];
    let j = listCodes.length - 1;
    while (j >= 0) {
        let data = getData(tex, listCodes[j], dat);
        //let data = getData(tex, listCodes[j], dat);
        console.log(data);
        appendPre(listCodes[j], dat);
        j--;
    }
}

function appendPre(message, date) {
    let d = document.createElement('div');
    d.setAttribute("class", "entry");
    let num = .056;
    let t = document.createTextNode(message + " $100" + " Only " + num + " dollars per mile!\n");
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
