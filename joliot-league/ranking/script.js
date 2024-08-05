// Register the date in french
// Register the date in french
var date = new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };
document.getElementById("date").innerHTML = date.toLocaleDateString('fr-FR', options);