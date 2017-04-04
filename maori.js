
//One global variable per object propety. These refer to our html divs.
var proverbGenerator0 = document.getElementById("maori-proverb");
var proverbGenerator1 = document.getElementById("translation");
// A global variable for our button
var btn = document.getElementById("btn");
// We have added an event listner function to this button, so that it responds to a mouse click
btn.addEventListener("click", function() {
    var ourData;// Local variable to be hoisted further down
    var ourRequest = new XMLHttpRequest();// We have defined a local variable that directs the browser to the API destination
    ourRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', false);// Open, will open the site, Get tells the computer to grab the information
    ourRequest.onload = function() {// onload instructs the computer about how to proceed upon loading
        ourData = JSON.parse(ourRequest.responseText);//we are now defining our data, we jason for a combination of objects and arrays, it translates the website data to a usable form
//In the () we are specifing the particular properties we want from within the object
    };


    ourRequest.send();//send will send the gathered data back to our indexHTML
    console.log(ourData);
    proverbGenerator0.innerHTML = ourData.source;// Here we tell the computer where we want the data to go specifically. 
    proverbGenerator1.innerHTML = ourData.translation;
});
