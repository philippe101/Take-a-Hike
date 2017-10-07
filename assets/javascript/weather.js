$(document).ready(function() { 

  var longitude = "33.87342";
  var latitude = "-115.90099";
  var APIKey = "058e52fd52e54f1043d30a1ad70a482e";
  var queryURL = "https://api.darksky.net/forecast/058e52fd52e54f1043d30a1ad70a482e/33.87342,%20-115.90099";
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/" + APIKey + "/" + longitude + "," + latitude;

  $.ajax({
    url: proxy + apiLinkDS,
    success:function(data) { 
      console.log(data);
      console.log(data.currently);
      console.log("Current Temperature: " + data.currently.temperature + "F");
      console.log("Current Skies: " + data.currently.summary);
      console.log("Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F");

      $("#current-temperature").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
      $("#current-skies").html("<p>Current skies: " + data.currently.summary);
      $("#tomorrow-high").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
    }


  });





});