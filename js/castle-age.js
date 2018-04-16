var date = new Date();
var year = date.getFullYear();
var castleFounded = document.getElementById('years').innerHTML;
var castleAge = year - castleFounded;
document.getElementById('age').innerHTML = castleAge;
