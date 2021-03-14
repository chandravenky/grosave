
var button1 = document.getElementById("postalcode-button");
var input = document.getElementById("postalcode-input");
var divaddselect = document.getElementsByClassName("search-address")[0]

function inputLength() {
    return input.value.length;
}

function createaddressElement() {

    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Neighbors in " + input.value));
    divaddselect.appendChild(p);
    input.value = ""
}

function addaddressafterClick(){
        if (inputLength() > 0) {
            createaddressElement()
        }
    }

function addaddressafterkeypress(event){
    if (inputLength() > 0 && event.key == "Enter") {

        createaddressElement()
    }
}

button1.addEventListener("click", addaddressafterClick)

input.addEventListener("keypress", addaddressafterkeypress)

var registerbutton = document.getElementsByClassName("register")[0]

function openurl() {
    console.log("clicked")
    window.open("registration.html", "_top")
}

registerbutton.addEventListener('click', openurl)

