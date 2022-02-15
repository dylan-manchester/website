var h = new Date().getHours();
if (h<12) {var greeting = "Good Morning!"}
else if (h<18) {var greeting = "Good Afternoon!"}
else {var greeting = "Good Evening!"}
document.getElementById("greeting").innerHTML = greeting