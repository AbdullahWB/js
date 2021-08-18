//js output;
// document.write("<h1>hello evreyone</h1>");
// window.alert('this is a popup');
// console.log('this is a hidden messag');
//js to html output;
// document.getElementById('head').innerHTML = "hello, kamon asen sobai";
//concate - string

var maintext = "The deadly July 12 attack on Najia's home in Faryab province was a chilling preview of the threat now facing women across Afghanistan after the Taliban's takeover of the capital Kabul. CNN is using aliases for Najia and Manizha to protect their identity for safety reasons.Manizha said she yelled at the fighters to stop. They paused for a moment before throwing a grenade into the next room and fleeing as the flames spread, she said. The mother of four died from the beating."
document.getElementsByClassName('ptext')[0].innerHTML = maintext;
document.getElementsByClassName('ptext-2')[0].innerHTML = maintext.length;

//custom js;
function addition() {
    var num1 = 255;
    var num2 = 530;
    var result = num1 + num2;
    document.getElementById('add').innerHTML = result;
}

function subtraction() {
    var num1 = 483;
    var num2 = 312;
    var result = num1 - num2;
    document.getElementById('sub').innerHTML = result;
}

function multiplication() {
    var num1 = 237;
    var num2 = 99;
    var result = num1 * num2;
    document.getElementById('mul').innerHTML = result;
}

function division() {
    var num1 = 1288;
    var num2 = 180;
    var result = num1 / num2;
    document.getElementById('div').innerHTML = result;
}