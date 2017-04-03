var proverbGenerator0 = document.getElementById("maori-proverb");
var proverbGenerator1 = document.getElementById("translation");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
var ourData;
var ourRequest= new XMLHttpRequest();
ourRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs',false);
ourRequest.onload = function() {
ourData = JSON.parse(ourRequest.responseText);
};

ourRequest.send();
console.log(ourData);
proverbGenerator0.innerHTML = ourData.source;
proverbGenerator1.innerHTML = ourData.translation;
});
