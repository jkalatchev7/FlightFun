import axios from "axios";

//var searchButton = document.getElementById('destination');
let text = document.getElementById('origin');
let date = document.getElementById('date');

function getData(origin, code, date) {
    const options = {
  method: 'GET',
  url: ('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/US/USD/en-US/%s-sky/%s-sky/%s', origin, code, date),
  params: {shortapikey: 'ra66933236979928', apiKey: '{shortapikey}'},
  headers: {
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

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
    let t = document.createTextNode("We found flights to " + message + " on " + date + "\n");
    //document.getElementById("firstBox").setAttribute("textContent", ("Showing flights departing: " + message));
    //blah
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