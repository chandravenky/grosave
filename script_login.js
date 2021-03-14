
var userinfo =
{
    username: "Venky",
    password: "secretservice"
}

var database = [
    {
        username: "Venky",
        password: "secretservice"
    },
    {
        username: "Sherry",
        password: "crazybois"
    },
    {
        username: "Rami",
        password: "crazybois"
    },
    {
        username: "Noah",
        password: "crazybois"
    },
    {
        username: "Shaan",
        password: "crazybois"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];




function isUserValid(username, password) {

    for (var i = 0; i < database.length; i++) {

        if (username == database[i].username && password == database[i].password) {
            return true;
        }
    }
}

function signIn() {

    var userNamePrompt = prompt("Username?");
    var passwordPrompt = prompt("Password?");

    if (isUserValid(userNamePrompt, passwordPrompt) == true) {
        alert("Welcome!");
        console.log("success");
    }
    else {
        alert("Incorrect login!");
        console.log("failure");
        signIn()         
    }
}

signIn()