// Simple JavaScript for student railway booking project

// Dummy train data. This is static data, no database is used.
var trains = [
    {
        name: "Rajdhani Express",
        number: "12951",
        route: "Delhi to Mumbai",
        time: "16:55 - 08:35",
        price: "₹1850"
    },
    {
        name: "Shatabdi Express",
        number: "12015",
        route: "Delhi to Jaipur",
        time: "06:10 - 10:45",
        price: "₹750"
    },
    {
        name: "Duronto Express",
        number: "12273",
        route: "Kolkata to Patna",
        time: "21:30 - 05:50",
        price: "₹980"
    },
    {
        name: "Intercity Express",
        number: "12678",
        route: "Chennai to Bengaluru",
        time: "07:20 - 13:10",
        price: "₹620"
    }
];

// Check login form only if it exists on page
var loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value.trim();
        var password = document.getElementById("password").value.trim();
        var msg = document.getElementById("loginMsg");

        if (username === "" || password === "") {
            msg.innerText = "Please enter username and password.";
            return;
        }

        if (password.length < 4) {
            msg.innerText = "Password should be at least 4 characters.";
            return;
        }

        // Save username in localStorage for session type behaviour
        localStorage.setItem("railwayUser", username);
        window.location.href = "home.html";
    });
}

// This function checks that user is logged in
function checkLogin() {
    var user = localStorage.getItem("railwayUser");

    if (!user && !window.location.pathname.includes("index.html")) {
        window.location.href = "index.html";
    }

    return user;
}

// Show username on home page
var showUser = document.getElementById("showUser");
if (showUser) {
    var userName = checkLogin();
    showUser.innerText = userName;
}

// Show profile name from login username
var profileName = document.getElementById("profileName");
if (profileName) {
    var profileUser = checkLogin();
    profileName.innerText = profileUser;
}

// Display train cards on home page
var trainList = document.getElementById("trainList");
if (trainList) {
    checkLogin();
    displayTrains(trains);
}

function displayTrains(trainArray) {
    trainList.innerHTML = "";

    for (var i = 0; i < trainArray.length; i++) {
        var train = trainArray[i];

        var card = document.createElement("div");
        card.className = "train-card";

        card.innerHTML =
            "<h3>" + train.name + "</h3>" +
            "<p><b>Train No:</b> " + train.number + "</p>" +
            "<p><b>Route:</b> " + train.route + "</p>" +
            "<p><b>Timing:</b> " + train.time + "</p>" +
            "<p><b>Fare:</b> " + train.price + "</p>" +
            "<button class='mt-3 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800'>Book Now</button>";

        trainList.appendChild(card);
    }
}

// Search form simple validation
var searchForm = document.getElementById("searchForm");
if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var from = document.getElementById("fromStation").value.trim();
        var to = document.getElementById("toStation").value.trim();
        var date = document.getElementById("travelDate").value;
        var searchMsg = document.getElementById("searchMsg");

        if (from === "" || to === "" || date === "") {
            searchMsg.innerText = "Please fill From, To and Date before searching.";
            return;
        }

        searchMsg.innerText = "Showing sample trains for " + from + " to " + to + " on " + date + ".";
        displayTrains(trains);
    });
}

// Logout function
function logoutUser() {
    localStorage.removeItem("railwayUser");
    window.location.href = "index.html";
}

// Dummy edit profile button message
function editProfileMsg() {
    var editMsg = document.getElementById("editMsg");
    editMsg.innerText = "Edit profile feature is not connected to backend in this project.";
}
