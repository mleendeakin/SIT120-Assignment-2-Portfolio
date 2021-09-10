
var testString = "How long is this String?";
var stringLength = testString.length;
var clicked = "clicked";

var test2 = testString.concat(" ", stringLength)



document.getElementById('length').innerHTML = test2

function buttonClick()
{
  document.getElementById('conString').innerHTML += clicked + " ";
}

var myName = ["Michael", "is", "my", "name"];
var myNameOutput = "";


myNameOutput += myName[2] + " "
myNameOutput += myName[3] + " "
myNameOutput += myName[1] + " "
myNameOutput += myName[0] + " "

var arrayLength = myName.length




document.getElementById('arrayTest').innerHTML = myNameOutput
document.getElementById('arrayTest2').innerHTML = myName.join(" ")

var d = new Date();
document.getElementById('date').innerHTML += d.getFullYear();
document.getElementById('date1').innerHTML += d.getDate();
document.getElementById('date2').innerHTML += d.getMonth();
