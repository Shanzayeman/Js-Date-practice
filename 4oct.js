const d = new Date();
document.getElementById("M1").innerHTML = d.getFullYear();
const d1 = new Date();
document.getElementById("M2").innerHTML = d1.getMonth() + 1;
const d2 = new Date();
document.getElementById("M3").innerHTML = d2.getDate();
const d3 = new Date();
document.getElementById("M4").innerHTML = d3.getHours();
const d4 = new Date();
document.getElementById("M5").innerHTML = d4.getMinutes();
const d5 = new Date();
document.getElementById("M6").innerHTML = d5.getSeconds();
const d6 = new Date("October 04, 2024 08:29:00");
document.getElementById("demo").innerHTML = d6;