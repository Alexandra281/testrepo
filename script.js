<<<<<<< HEAD
var principal = document.getElementById("principal").nodeValue;
var rate = document.getElementById("rate").nodeValue;
var years = document.getElementById("years").nodeValue
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
function updateRate()
{var rateval = document.getElementById("rate").nodeValue;document.getElementById("rate_val").innerText=rateval;}
document.getElementById("result").innerHTML="If you deposit"+principal+",\<br\>in the year "+year+"\<br\>"
=======

>>>>>>> 479a2d5376f85247c91a67c7d4dcc5ac978793f2
